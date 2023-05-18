interface IQueryParams {
    lang?: string;
    template?: string;
}

export const queryCheck = (query: IQueryParams) => {
    if (!query.template) {
        throw new Error('template is required')
    }
}
