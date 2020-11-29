import { Component, OnInit, Input ,EventEmitter , Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;

  @Output() deletoTodo : EventEmitter<Todo> = new EventEmitter();
  constructor( private todoService : TodoService) {}

  ngOnInit(): void {}

  // set dynamic Classes

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo?.completed,
    };
    return classes;
  }

  onToggle( todo?:Todo){
      //toggle on ui
    if ( todo) {
      todo.completed=!todo.completed ; 
     // toggle on server
     this.todoService.toggleCompleted(todo).subscribe(todo=>{console.log(todo)})
console.log('toggle')
    }
  }


  onDelete(todo?:Todo){
    if ( todo){
      this.deletoTodo.emit(todo)
    }
    console.log( 'deleted')
  }
}
