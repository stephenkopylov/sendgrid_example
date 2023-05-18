import * as React from 'react';
import {
    Text,
} from '@react-email/components';
import i18n from "./locale/i18n";
import {useLanguage} from "../../../hooks/useLanguage";

export const Header: React.FC = () => {
    const lang = useLanguage();
    i18n.changeLanguage(lang);
    return (
        <Text>
            {i18n.t('TITLE')}
        </Text>
    );
};
