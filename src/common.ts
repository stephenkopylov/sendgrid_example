import {IsDefined} from "class-validator";

export enum Templates {
    RateApp,
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
}

export const getTemplateByName = (name: string): Templates => {
    for (let item in Templates) {
        if (isNaN(Number(item))) {
            console.log(item);
            if (item.toLowerCase() === name.toLowerCase()) {
                return Templates[item as keyof typeof Templates];
            }
        }
    }

    return Templates.Unknown;
}


