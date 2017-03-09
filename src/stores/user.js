import { observable, computed, action } from 'mobx';

export default class UserStore {
  @observable name;
  @observable lastName;
  @observable age;
  @observable xp;

  constructor(name, lastName, age, xp) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.xp = xp;
  }

  @action('Change Name') changeName(name){
    this.name = name;
  }

  @action('Change Last Name') changeLastName(lastName){
    this.lastName = lastName;
  }

  @action('Increase XP') increaseXp(amount){
    this.xp += amount;
  }

  @computed get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}
