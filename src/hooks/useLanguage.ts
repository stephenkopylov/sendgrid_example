import {PayloadContext} from "../providers/payloadProvider";
import {useContext} from "react";

export const useLanguage = () => {
    const {lang} = useContext(PayloadContext);

    return lang;
};
