import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './compoenents/todos/todos.component';
import { TodoItemComponent } from './compoenents/todo-item/todo-item.component';
import { HeaderComponent } from './compoenents/layouts/header/header.component';
import { AddTodoComponent } from './compoenents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './compoenents/pages/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
  ],
  imports: [FormsModule, HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
