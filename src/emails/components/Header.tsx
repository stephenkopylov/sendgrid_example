import * as React from 'react';
import {
    Text,
} from '@react-email/components';
import i18n from "../../locale/i18n";

export const Header: React.FC = () => {
    return (
        <Text>
            {i18n.t('TITLE')}
        </Text>
    );
};
