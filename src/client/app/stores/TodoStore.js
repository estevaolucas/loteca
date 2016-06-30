import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

const store = {
  list: [],
  editing: false,
};

const TodoStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getList() {
    return store;
  },
});

AppDispatcher.register(payload => {
  const { action } = payload;

  switch (action.actionType) {

    case AppConstants.NEW_ITEM:
      store.editing = true;
      TodoStore.emit(CHANGE_EVENT);

      break;

    case AppConstants.SAVE_ITEM:
      store.list.push(action.text);
      store.editing = false;
      TodoStore.emit(CHANGE_EVENT);

      break;

    case AppConstants.REMOVE_ITEM:
      store.list.splice(action.index, 1);
      TodoStore.emit(CHANGE_EVENT);

      break;

    default:
      return true;
  }

  return false;
});

module.exports = TodoStore;
