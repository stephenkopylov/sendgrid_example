import {createContext, memo, PropsWithChildren} from "react";
import {Query} from "../misc/common";

export const PayloadContext = createContext<Query>({} as Query);

export interface IPayloadProvider {
    query: Query;
    children: React.ReactNode;
}

export const PayloadProvider = memo<PropsWithChildren<IPayloadProvider>>(props => {
    const {query, children} = props;
    return <PayloadContext.Provider value={query}>{children}</PayloadContext.Provider>;
});
