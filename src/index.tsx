import {render} from '@react-email/render';
import * as React from 'react';
import {Email} from './email';
import i18n from "./locale/i18n";

var argv = require('minimist')(process.argv.slice(2));

i18n.changeLanguage(argv.lang);

const emailHtml = render(<Email url="https://example.com"/>);

console.log(emailHtml);
