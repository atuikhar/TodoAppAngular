import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';
import { v4 as uuidv4 } from 'uuid';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faXbox } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Todo List';
  text: string;
  id: string;
  todos: Todo[];
  completed: boolean = false;
  faTimesCircle = faTimesCircle;
  faXbox = faXbox;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  onSubmit() {
    if (!this.text) {
      alert('Please Add a Todo');
      return;
    }

    const newTodo = {
      id: uuidv4(),
      text: this.text,
      completed: this.completed,
    };

    this.todoService.addTodo(newTodo);
    this.text = '';
  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  onToggle(todo: Todo) {}
}
