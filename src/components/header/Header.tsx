import * as React from 'react';
import {
    Text,
    Img
} from '@react-email/components';
import i18n from "./locale/i18n";
import {useLanguage} from "../../hooks/useLanguage";
import {useBrand} from "../../hooks/useBrand";
import {useBaseDomain} from "../../hooks/useBaseDomain";

export const Header: React.FC = () => {
    const lang = useLanguage();
    i18n.changeLanguage(lang);
    const brand = useBrand();
    const baseDomain = useBaseDomain();
    return (
        <>
            <Img src={`${baseDomain}/public/brand/${brand}/logo.png`}
                 style={{width: '100px', height: '100px'}}/>
            <Text>
                {i18n.t('TITLE')}
            </Text>
        </>
    );
};
