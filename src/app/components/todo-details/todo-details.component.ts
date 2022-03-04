import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  todo;
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodosById(id).subscribe((todo) => {
      this.todo = todo;
    });
  }
}
