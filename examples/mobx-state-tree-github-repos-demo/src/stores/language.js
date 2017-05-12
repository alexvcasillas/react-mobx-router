import { types } from 'mobx-state-tree';

import esES from '../language/i18n/es';
import enUS from '../language/i18n/en';

const LanguageStore = types.model(
  'LanguageStore',
  {
    language: types.string,
    get currentLanguage() {
      return this.language;
    },
    get resource() {
      switch (this.language) {
        case 'en':
          return enUS;
        case 'es':
          return esES;
        default:
          return enUS;
      }
    }
  },
  {
    changeLanguageTo(language) {
      this.language = language;
    }
  }
);

export default LanguageStore;
