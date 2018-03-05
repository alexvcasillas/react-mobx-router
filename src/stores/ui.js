import { types } from 'mobx-state-tree';

const UIStore = types
  .model('UIStore', {
    borderRadius: types.number,
    textColor: types.string
  })
  .views(self => ({}))
  .actions(self => ({
    changeBorderRadius(value) {
      self.borderRadius = value;
    },
    changeTextColor(value) {
      self.textColor = value;
    }
  }));

export default UIStore;
