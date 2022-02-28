import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faXbox } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  todos: Todo[];
  faTimesCircle = faTimesCircle;
  faXbox = faXbox;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
