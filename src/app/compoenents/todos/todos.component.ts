import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService:TodoService) {
    this.todos = [];
  }

  ngOnInit(): void {
 this.todoService.getTodos().subscribe(todos=>{
   this.todos=todos;
 });
  }

  deletoTodo(todo:Todo){
  this.todos=  this.todos.filter(t=>t.id!=todo.id)
this.todoService.deleteTodo(todo).subscribe()
  //  console.log("delete "+todo.id)
  }

  addTodo(todo:Todo){
    console.log("submit")
    this.todoService.addTodo(todo).subscribe(todo=>{
      console.log(todo)
     
      this.todos.push(todo);
    })

  }
}
