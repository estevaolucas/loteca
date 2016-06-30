import React from 'react';
import TodoItem from './TodoItem.jsx';
import EditItem from './EditItem.jsx';

const TodoList = ({ list, editing }) => {
  const rows = [];

  if (list.length) {
    list.forEach((item, index) => {
      rows.push(<TodoItem key={index} index={index} item={item} />);
    });
  }

  if (editing) {
    rows.push(<EditItem key={-1} />);
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

TodoList.propTypes = {
  list: React.PropTypes.array,
  editing: React.PropTypes.bool,
};

export default TodoList;
