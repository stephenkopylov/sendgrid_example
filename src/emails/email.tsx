import * as React from 'react';
import {
    Button,
    Html,
    Text,
} from '@react-email/components';
import i18n from "../locale/i18n";

interface IEmailProps {
    url: string;
}

export const Email: React.FC<IEmailProps> = props => {
    const {url} = props;
    return (
        <Html>
            <Text>
                {i18n.t('TITLE')}
            </Text>
            <Button href={url}>Click me</Button>
        </Html>
    );
};
