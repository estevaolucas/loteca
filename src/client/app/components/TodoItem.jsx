import React from 'react';
import TodoActions from '../actions/TodoActions';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete() {
    TodoActions.removeItem(this.props.index);
  }

  render() {
    return (
      <tr>
        <td>{this.props.item}</td>
        <td>
          <button
            type="button"
            onClick={this.delete}
            className="btn btn-link pull-right"
          >
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    );
  }
}

TodoItem.propTypes = {
  item: React.PropTypes.string.isRequired,
  index: React.PropTypes.number,
};
