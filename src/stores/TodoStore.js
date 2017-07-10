import { observable } from 'mobx';

export class TodoStore {
  @observable todos = [];

  addTodo(task) {
    this.todos.push({
      task,
      completed: false
    });
  }

  completeTodo(index) {
    this.todos[index].completed = true;
  }

  uncompleteTodo(index) {
    this.todos[index].completed = false;
  }
}

const todoStore = new TodoStore();

todoStore.addTodo("Ein Todo abhaken");
todoStore.completeTodo(0);
todoStore.addTodo("Studenten MOBX erklären!");

export default todoStore;
