import { observable, computed, action, reaction } from 'mobx';

import esES from '../language/i18n/es';
import enUS from '../language/i18n/en';

export default class LanguageStore {
  @observable language;
  @observable resource;

  constructor(language) {
    // Set the Initial State of Language Observable
    this.language = language;
    // Set the Initial State of Resource Observable
    switch (this.language) {
      case 'en':
        this.resource = enUS;
        break;
      case 'es':
        this.resource = esES;
        break;
      default:
        this.resource = enUS;
        break;
    }
    // Stablish a Reaction for changing Resources on the fly when Language Observer Changes
    reaction(
      () => this.language,
      () => {
        switch (this.language) {
          case 'en':
            this.resource = enUS;
            break;
          case 'es':
            this.resource = esES;
            break;
          default:
            this.resource = enUS;
            break;
        }
      }
    );
  }

  @action("Change language to") changeLanguageTo(language) {
    this.language = language;
  }

  @computed get currentLanguage() {
    return this.language;
  }
}
