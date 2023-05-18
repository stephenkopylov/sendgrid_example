import {IsDefined} from "class-validator";

export enum Templates {
    Email,
}

export class Query {
    @IsDefined()
    lang!: string;

    @IsDefined()
    template!: string;
}

export const queryCheck = (query: Query) => {
    if (!query.template) {
        throw new Error(`template is required in query params ${JSON.stringify(query)}`)
    } else {
        let found = false;
        Object.values(Templates).forEach((value) => {
            if (value.toString().toLowerCase() === query?.template?.toLowerCase()) {
                found = true;
            }
        });
        if (!found) {
            throw new Error("can't find template")
        }
    }
}
