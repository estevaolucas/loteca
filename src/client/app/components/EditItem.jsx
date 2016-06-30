import React from 'react';
import TodoActions from '../actions/TodoActions';

export default class EditItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
    this.catchEnter = this.catchEnter.bind(this);
  }

  onChange(e) {
    this.state.text = e.target.value;
  }

  save() {
    TodoActions.saveItem(this.state.text);
  }

  catchEnter(e) {
    if (e.keyCode === 13) {
      this.save();
    }
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"placeholder="Add new todo..."
            className="form-control"
            autoFocus
            onChange={this.onChange}
            onKeyDown={this.catchEnter}
          />
        </td>
        <td>
          <button
            type="button"
            onClick={this.save}
            className="btn btn-link pull-right"
          >
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    );
  }
}
