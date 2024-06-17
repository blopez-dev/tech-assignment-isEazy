import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    detection: {
        order: ['cookie', 'htmlTag', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    backend: {
        loadPath: '/i18n/{{lng}}/translation.json',
    },
});

export default i18n;
