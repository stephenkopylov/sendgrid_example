import {render} from '@react-email/render';
import express from 'express';
import * as React from 'react';
import i18n from "./locale/i18n";
import {getAllTemplates, getTemplateByName, getTemplateMetadata, Query, Templates} from "./common";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import {plainToInstance} from "class-transformer";
import {validateMailData, validateQuery} from "./validator";
import {Error} from "./Error";
import {AddressInfo} from "net";

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

let app = express();

app.use(connectLiveReload());

app.use('/', async (req, res) => {
    const query = plainToInstance(Query, req.query);
    let error = await validateQuery(query);

    if (!error) {
        await i18n.changeLanguage(query.lang);

        const template = getTemplateByName(query.template)

        if (template != Templates.Unknown) {
            const templateMetadata = getTemplateMetadata(template);

            if (templateMetadata != null) {
                const data = plainToInstance(templateMetadata.dataClass, req.query);

                error = await validateMailData(data);

                if (!error) {
                    const emailHtml = render(<templateMetadata.component data={data}/>);
                    res.send(emailHtml);
                }
            } else {
                error = `Unknown template! Available templates: ${getAllTemplates()}`;
            }
        } else {
            error = `Unknown template! Available templates: ${getAllTemplates()}`;
        }
    }

    if (error) {
        const emailHtml = render(<Error text={error}/>);
        res.send(emailHtml);
    }
})

let server = app.listen(8081, function () {
    const addressInfo = server.address() as AddressInfo;

    console.log("Example app listening at http://%s:%s", addressInfo.address != "::" ? addressInfo.address : "localhost", addressInfo.port)

})
