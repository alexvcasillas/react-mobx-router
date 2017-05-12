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
