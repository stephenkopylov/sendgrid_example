import * as React from 'react';
import {
    Body,
    Button,
    Head,
    Html,
    Preview,
    Text,
} from '@react-email/components';
import {IsDefined} from "class-validator";
import {useColors} from "../../../hooks/useColors";
import {Footer, Header} from "../..";

export class RateAppData {
    @IsDefined()
    url!: string;
}

interface IEmailProps {
    data: RateAppData;
}

export const RateApp: React.FC<IEmailProps> = props => {
    const {data} = props;
    const colors = useColors();
    return (
        <Html>
            <Head/>
            <Preview>Stack overflow tips for searching</Preview>
            <Body>
                <Header/>
                <Button style={{color: colors.Primary20.toString()}} href={data.url}>Click me</Button>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Footer/>
            </Body>
        </Html>
    );
};
