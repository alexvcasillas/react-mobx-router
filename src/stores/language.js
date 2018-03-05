import { types } from 'mobx-state-tree';

import esES from '../language/i18n/es';
import enUS from '../language/i18n/en';

const LanguageStore = types
  .model('LanguageStore', {
    language: types.string
  })
  .views(self => ({
    get currentLanguage() {
      return self.language;
    },
    get resource() {
      switch (self.language) {
        case 'en':
          return enUS;
        case 'es':
          return esES;
        default:
          return enUS;
      }
    }
  }))
  .actions(self => ({
    changeLanguageTo(language) {
      self.language = language;
    }
  }));

export default LanguageStore;
