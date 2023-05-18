import * as React from 'react';
import {
    Text,
} from '@react-email/components';
import i18n from "./locale/i18n";
import {useLanguage} from "../../../hooks/useLanguage";

export const Footer: React.FC = () => {
    const lang = useLanguage();
    i18n.changeLanguage(lang);
    return (
        <Text>
            {`Footer 1 + ${i18n.t('TITLE')}`}
        </Text>
    );
};
