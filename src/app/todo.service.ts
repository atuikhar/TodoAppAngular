import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {}

  getTodos(): Observable<Todo[]> {
    if (localStorage.getItem('todos') === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }

    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.unshift(todo);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo) {
    this.todos.forEach((curr, index) => {
      if (todo.id === curr.id) {
        this.todos.splice(index, 1);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
