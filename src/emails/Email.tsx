import * as React from 'react';
import {
    Body,
    Button,
    Head,
    Html,
    Preview,
    Text,
} from '@react-email/components';
import i18n from "../locale/i18n";
import {Footer, Header} from "./components";

interface IEmailProps {
    url: string;
}

export const Email: React.FC<IEmailProps> = props => {
    const {url} = props;
    return (
        <Html>
            <Head/>
            <Preview>Stack overflow tips for searching</Preview>
            <Body>
                <Header/>
                <Button href={url}>Click me</Button>
                <Footer/>
            </Body>
        </Html>
    );
};
