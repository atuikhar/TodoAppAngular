import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  text: string;
  id: string;
  todos: Todo[];
  completed: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

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
}
