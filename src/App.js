import React, { Component } from 'react';
import './App.css';

import { inject, observer } from 'mobx-react';

@inject("todoStore")
@observer
class App extends Component {
  handleAddTodo = (event) => {
    const { todoStore } = this.props;
    todoStore.addTodo(this.refs.todo.value);
  }

  handleCompleteTodo = (event) => {
    const { todoStore } = this.props;
    const index = event.target.dataset.index;

    todoStore.completeTodo(index);
  }

  handleUncompleteTodo = (event) => {
    const { todoStore } = this.props;
    const index = event.target.dataset.index;

    todoStore.uncompleteTodo(index);
  }

  render() {
    const { todos } = this.props.todoStore;

    return (
      <div className="App">
        <h1>Todos</h1>
        <ul>
          {todos.map((todo, index) => {
            return(
              <li key={index}>
                {todo.completed && <strike onClick={this.handleUncompleteTodo} data-index={index}>{todo.task}</strike>}
                {!todo.completed && <span onClick={this.handleCompleteTodo} data-index={index}>{todo.task}</span>}
              </li>
            )
          })}
        </ul>

        <input ref="todo" type="text" />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default App;
