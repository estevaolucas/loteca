import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

export default {
  addItem() {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.NEW_ITEM,
    });
  },

  saveItem(text) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.SAVE_ITEM,
      text,
    });
  },

  removeItem(index) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.REMOVE_ITEM,
      index,
    });
  },
};
