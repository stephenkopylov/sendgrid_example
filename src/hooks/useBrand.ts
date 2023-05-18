import {PayloadContext} from "../providers/payloadProvider";
import {useContext} from "react";

export const useBrand = () => {
    const {brand} = useContext(PayloadContext);

    return brand;
};
