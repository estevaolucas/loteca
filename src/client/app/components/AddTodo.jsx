import React from 'react';
import TodoActions from '../actions/TodoActions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
  }

  add() {
    TodoActions.addItem();
  }

  render() {
    return (
      <button type="button" onClick={this.add} className="btn btn-link btn-block btn-lg">
        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>
    );
  }
}

export default AddTodo;
