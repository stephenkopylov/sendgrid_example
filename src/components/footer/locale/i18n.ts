import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';
import ru from './ru.json';

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    }
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    }
});

export default i18n;
