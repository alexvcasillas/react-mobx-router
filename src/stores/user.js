import { types } from 'mobx-state-tree';

/**
 * Mobx State Tree Store
 * The store recieves 3 parameters
 *  1st one is the Store Name
 *  2nd is an object with the Props and Computed values
 *  3rd is and object with the Actions
 **/
const UserStore = types.model(
  'UserStore',
  {
    id: types.identifier(),
    name: types.string,
    lastName: types.string,
    age: types.number,
    xp: types.number,
    get fullName() {
      return `${this.name} ${this.lastName}`;
    }
  },
  {
    changeName(name) {
      this.name = name;
    },
    changeLastName(lastName) {
      this.lastName = lastName;
    },
    increaseXp(amount) {
      this.xp += amount;
    }
  }
);

export default UserStore;
