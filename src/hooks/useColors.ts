import {useBrand} from "./useBrand";

import colorsEO from '../brands/eo/colorTheme.json'
import colorsTickz from '../brands/tickz/colorTheme.json'
import colorsNeutral from '../brands/neutral/colorTheme.json'
import {plainToInstance} from "class-transformer";
import {colors} from "../misc/colors";

export const useColors = () => {
    const brand = useBrand()

    switch (brand) {
        case 'eo': {
            return plainToInstance(colors, colorsEO);
        }
        case `tickz`: {
            return plainToInstance(colors, colorsTickz);
        }
        default: {
            return plainToInstance(colors, colorsNeutral);
        }
    }
};
