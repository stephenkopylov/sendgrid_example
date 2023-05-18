import {render} from '@react-email/render';
import express from 'express';
import * as React from 'react';
import i18n from "./locale/i18n";
import {Email, EmailData} from "./emails";
import {Query, queryCheck, Templates} from "./common";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import {validate} from "class-validator";
import {plainToInstance} from "class-transformer";
import {validateMailData, validateQuery} from "./validator";
import {Error} from "./Error";

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

        const template = Templates[query.template as keyof typeof Templates];

        switch (template) {
            case Templates.Email: {
                const data = plainToInstance(EmailData, req.query);

                error = await validateMailData(data);

                if (!error) {
                    const emailHtml = render(<Email data={data}/>);
                    res.send(emailHtml);
                }
            }
        }
    }

    if (error) {
        const emailHtml = render(<Error text={error}/>);
        res.send(emailHtml);
    }
})

let server = app.listen(8081, function () {
    console.log("Example app listening at http://%s:%s", server.address(), server.address())
})
