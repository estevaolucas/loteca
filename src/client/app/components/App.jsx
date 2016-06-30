import React from 'react';
import { render } from 'react-dom';
import TodoStore from '../stores/TodoStore';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = TodoStore.getList();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(TodoStore.getList());
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <AddTodo />
              </div>
              <div className="panel-body">
                <TodoList list={this.state.list} editing={this.state.editing} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
