import {Query} from "./common";
import {validate} from "class-validator";

export const validateQuery = async (query: Query): Promise<string | null> => {
    return validate(query).then(errors => {
        if (errors.length > 0) {
            return JSON.stringify(errors);
        } else {
            return null;
        }
    });
}


export const validateMailData = async (data: any): Promise<string | null> => {
    return validate(data).then(errors => {
        if (errors.length > 0) {
            return JSON.stringify(errors);
        } else {
            return null;
        }
    });
};
