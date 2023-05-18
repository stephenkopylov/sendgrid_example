import * as React from 'react';
import {
    Body,
    Html,
    Text,
} from '@react-email/components';

interface IEmailProps {
    text: string;
}

export const Error: React.FC<IEmailProps> = props => {
    const {text} = props;
    return (
        <Html>
            <Text>Error!</Text>
            <Text>{text}</Text>
        </Html>
    );
};
