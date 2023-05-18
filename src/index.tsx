import {render} from '@react-email/render';
import express from 'express';
import * as React from 'react';
import i18n from "./locale/i18n";
import {Email} from "./emails";
import {queryCheck} from "./common";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";



const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 50);
});

let app = express();

app.use(connectLiveReload());

app.get('/', function (req, res) {
    const query = req.query;
    queryCheck(query);
    if (query.lang && typeof query.lang === 'string') {
        i18n.changeLanguage(query.lang);
    }
    const template = query.template;
    const emailHtml = render(<Email url="https://example.com"/>);
    res.send(emailHtml);
})

let server = app.listen(8081, function () {
    console.log("Example app listening at http://%s:%s", server.address(), server.address())
})


// var argv = require('minimist')(process.argv.slice(2));
//
// i18n.changeLanguage(argv.lang);
//
// const emailHtml = render(<Email url="https://example.com"/>);
//
// console.log(emailHtml);
