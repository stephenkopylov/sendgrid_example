import {IsDefined} from "class-validator";
import {RateApp, RateAppData} from "../components";
import {Welcome, WelcomeData} from "../components";
import {FC} from "react";

export enum Templates {
    RateApp,
    Welcome,
    Unknown
}

type Brand = "eo" | "tickz"

export class Query {
    @IsDefined()
    lang!: string;

    @IsDefined()
    template!: string;

    @IsDefined()
    brand?: Brand;

    @IsDefined()
    baseDomain: string = 'http://localhost:8081';
}


export const getTemplateByName = (name: string): Templates => {
    for (let item in Templates) {
        if (isNaN(Number(item))) {
            if (item.toLowerCase() === name.toLowerCase()) {
                return Templates[item as keyof typeof Templates];
            }
        }
    }

    return Templates.Unknown;
}

export const getAllTemplates = (): string => {
    let result = "";
    for (let item in Templates) {
        if (isNaN(Number(item)) && Templates[item as keyof typeof Templates] != Templates.Unknown) {
            console.log(item);
            result += item + ", ";
        }
    }
    return result;
}

interface ITemplateMetadata {
    component: FC<any>,
    dataClass: any
}

export const getTemplateMetadata = (template: Templates): ITemplateMetadata | null => {
    let component: FC<any> | null = null;
    let dataClass: any = null;

    switch (template) {
        case Templates.RateApp: {
            component = RateApp;
            dataClass = RateAppData;
            break;
        }
        case Templates.Welcome: {
            component = Welcome;
            dataClass = WelcomeData;
            break;
        }
        default: {
            break;
        }
    }

    if (component && dataClass) {
        return {
            component: component,
            dataClass: dataClass
        }
    }

    return null;
}


