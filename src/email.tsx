import * as React from 'react';
import {
    Button,
    Html,
    Text,
} from '@react-email/components';
import i18n from "./locale/i18n";

interface EmailProps {
    url: string;
    lang: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({url}) => {
    return (
        <Html>
            <Text>
                {i18n.t('TITLE')}
            </Text>
            <Button href={url}>Click me</Button>
        </Html>
    );
};
