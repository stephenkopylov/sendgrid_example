import {PayloadContext} from "../providers/payloadProvider";
import {useContext} from "react";

export const useBaseDomain = () => {
    const {baseDomain} = useContext(PayloadContext);

    return baseDomain;
};
