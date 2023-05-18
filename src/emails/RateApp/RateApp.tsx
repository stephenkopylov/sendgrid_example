import * as React from 'react';
import {
    Body,
    Button,
    Head,
    Html,
    Preview,
    Text,
} from '@react-email/components';
import {Footer, Header} from "../components";
import {IsDefined} from "class-validator";
import {useColors} from "../../hooks/useColors";

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
                <Button style={{color: colors.Primary30.toString()}} href={data.url}>Click me</Button>
                <Footer/>
            </Body>
        </Html>
    );
};
