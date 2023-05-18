import {render} from '@react-email/render';
import express from 'express';
import * as React from 'react';
import i18n from "./locale/i18n";
import {Email} from "./emails";
import {queryCheck, Templates} from "./common";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

let app = express();

app.use(connectLiveReload());

app.get('/', (req, res) => {
    const query = req.query;
    queryCheck(query);
    if (query.lang && typeof query.lang === 'string') {
        i18n.changeLanguage(query.lang);
    }
    const template = Templates[query.template as keyof typeof Templates];

    switch (template) {
        case Templates.Email: {
            const emailHtml = render(<Email url={query.url}/>);
            res.send(emailHtml);
        }
    }
})

let server = app.listen(8081, function () {
    console.log("Example app listening at http://%s:%s", server.address(), server.address())
})
