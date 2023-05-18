import {useBrand} from "./useBrand";

import colorsEORaw from '../brands/eo/colorTheme.json'
import colorsTickzRaw from '../brands/tickz/colorTheme.json'
import colorsNeutralRaw from '../brands/neutral/colorTheme.json'
import {plainToInstance} from "class-transformer";
import {colors} from "../misc/colors";

const colorsEO = plainToInstance(colors, colorsEORaw);
const colorsTickz = plainToInstance(colors, colorsTickzRaw);
const colorsNeutral = plainToInstance(colors, colorsNeutralRaw);

export const useColors = () => {
    const brand = useBrand()

    switch (brand) {
        case 'eo': {
            return colorsEO;
        }
        case `tickz`: {
            return colorsTickz;
        }
        default: {
            return colorsNeutral;
        }
    }
};
