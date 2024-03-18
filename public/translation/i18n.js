import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nLanguageType } from './enums';
import translationKR from './locales/kr.json';
import translationEN from './locales/en.json';

const resources = {
  [i18nLanguageType.KR]: {
    translation: translationKR,
  },
  [i18nLanguageType.EN]: {
    translation: translationEN,
  },
};
const currentLanguage =
  sessionStorage.getItem('i18nextLng') ?? i18nLanguageType.KR;

i18n.use(initReactI18next).init({
  resources,
  lng: currentLanguage,
});

export default i18n;
