import * as React from 'react';
import {
    Body,
    Button,
    Head,
    Html,
    Preview,
} from '@react-email/components';
import {Footer, Header} from "../..";
import {IsDefined} from "class-validator";
import {useLanguage} from "../../../hooks/useLanguage";
import i18n from './locale/i18n';

export class WelcomeData {
    @IsDefined()
    url!: string;
}

interface IEmailProps {
    data: WelcomeData;
}

export const Welcome: React.FC<IEmailProps> = props => {
    const {data} = props;
    const lang = useLanguage();

    i18n.changeLanguage(lang);

    return (
        <Html>
            <Head/>
            <Preview>Stack overflow tips for searching</Preview>
            <Body>
                <Header/>
                <Button href={data.url}>Welcome</Button>
                <Footer/>
            </Body>
        </Html>
    );
};
