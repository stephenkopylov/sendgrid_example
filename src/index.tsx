import {render} from '@react-email/render';
import express from 'express';
import * as React from 'react';
import {getAllTemplates, getTemplateByName, getTemplateMetadata, Query, Templates} from "./misc/common";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import {plainToInstance} from "class-transformer";
import {validateMailData, validateQuery} from "./misc/validator";
import {Error} from "./misc/Error";
import {AddressInfo} from "net";
import {PayloadProvider} from "./providers/payloadProvider";

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

let app = express();

app.use(connectLiveReload());
app.use('/', express.static(__dirname + '/'));
app.use('/', async (req, res) => {
    const query = plainToInstance(Query, req.query);
    let error = await validateQuery(query);

    if (!error) {
        const template = getTemplateByName(query.template)

        if (template != Templates.Unknown) {
            const templateMetadata = getTemplateMetadata(template);

            if (templateMetadata != null) {
                const data = plainToInstance(templateMetadata.dataClass, req.query);

                error = await validateMailData(data);

                if (!error) {
                    const emailHtml = render(
                        <PayloadProvider query={query}>
                            <templateMetadata.component data={data}/>
                        </PayloadProvider>
                    );
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
