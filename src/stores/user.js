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

  @action changeName(name){
    this.name = name;
  }

  @action changeLastName(lastName){
    this.lastName = lastName;
  }

  @action increaseXp(amount){
    this.xp += amount;
  }

  @computed get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}
