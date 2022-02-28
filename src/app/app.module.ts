import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TodoItemComponent, TodoFormComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
