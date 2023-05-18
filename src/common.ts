export enum Templates {
    Email,
}

interface IQueryParams {
    lang?: string;
    template?: string;
}

export const queryCheck = (query: IQueryParams) => {
    if (!query.template) {
        throw new Error('template is required')
    } else {
        let found = false;
        Object.values(Templates).forEach((value) => {
            if (value.toString().toLowerCase() === query.template.toLowerCase()) {
                found = true;
            }
        });
        if (!found) {
            throw new Error("can't find template")
        }
    }
}
