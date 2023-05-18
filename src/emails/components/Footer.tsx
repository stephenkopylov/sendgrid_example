import * as React from 'react';
import {
    Text,
} from '@react-email/components';
import i18n from "../../locale/i18n";

export const Footer: React.FC = () => {
    return (
        <Text>
            {`Footer 1 + ${i18n.t('TITLE')}`}
        </Text>
    );
};
