import * as React from 'react';
import {
    Body,
    Button,
    Head,
    Html,
    Preview,
    Text,
} from '@react-email/components';
import {Footer, Header} from "./components";
import {IsDefined} from "class-validator";

export class EmailData {
    @IsDefined()
    url!: string;
}

interface IEmailProps {
    data: EmailData;
}

export const RateApp: React.FC<IEmailProps> = props => {
    const {data} = props;
    return (
        <Html>
            <Head/>
            <Preview>Stack overflow tips for searching</Preview>
            <Body>
                <Header/>
                <Button href={data.url}>Click me</Button>
                <Footer/>
            </Body>
        </Html>
    );
};
