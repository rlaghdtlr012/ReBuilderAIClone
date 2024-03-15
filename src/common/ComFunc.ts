import _ from 'lodash';
import { i18nLanguageType, languageType } from 'public/translation/enums';

export const getLanguageArr = () => {
  return _.values(i18nLanguageType);
};

export const getLangTypeArr = () => {
  return _.values(languageType);
};
