import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function handleViewAction(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action,
  });
};

AppDispatcher.handleServerAction = function handleServerAction(action) {
  this.dispatch({
    source: 'SERVER_ACTION',
    action,
  });
};

module.exports = AppDispatcher;
