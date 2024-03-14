import i18n from "i18next"
import { initReactI18next } from 'react-i18next';

import translationKR from './locales/kr.json';
import translationEN from './locales/en.json';
import { i18nLanguageType } from "./enums";

const resources = {
  [i18nLanguageType.KR]: {
    translation: translationKR,
  },
  [i18nLanguageType.EN]: {
    translation: translationEN,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources, // 리소스
    lng: i18nLanguageType.KR, // 초기 설정 언어
  });

export default i18n;