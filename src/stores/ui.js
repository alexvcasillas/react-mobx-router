import { types } from 'mobx-state-tree';

const UIStore = types.model(
  'UIStore',
  {
    borderRadius: types.number,
    textColor: types.string
  },
  {
    changeBorderRadius(value) {
      this.borderRadius = value;
    },
    changeTextColor(value) {
      this.textColor = value;
    }
  }
);

export default UIStore;

// import { observable, action, computed } from 'mobx';
//
// export default class UIStore {
//   @observable borderRadius;
//   @observable textColor;
//
//   constructor(br, tc) {
//     this.borderRadius = br;
//     this.textColor = tc;
//   }
//
//   @action(`Changin' Border Radius`)
//   changeBorderRadius(value) {
//     this.borderRadius = value;
//   }
//
//   @computed get computeBorderRadius() {
//     return this.borderRadius;
//   }
// }
