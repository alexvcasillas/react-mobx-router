import { observable, computed, action } from 'mobx';

import esES from '../language/i18n/es';
import enUS from '../language/i18n/en';

export default class LanguageStore {
  @observable language;

  @computed get resource() {
    switch (this.language) {
      case 'en':
        return enUS;
      case 'es':
        return esES;
      default:
        return enUS;
    }
  }

  constructor(language) {
    // Set the Initial State of Language Observable
    this.language = language;
  }

  @action('Change language to')
  changeLanguageTo(language) {
    this.language = language;
  }

  @computed get currentLanguage() {
    return this.language;
  }
}
