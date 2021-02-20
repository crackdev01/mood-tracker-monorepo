import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    lng: 'de',
    fallbackLng: 'de',
    whitelist: ['en', 'de'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
