import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  addTodo(todo: any): Observable<Todo> {

    return this.http.post<Todo>(this.todosUrl , todo , httpOptions) ;
  }
  // get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle Compleleted
  toggleCompleted(todo: Todo): Observable<any> {
    const url: string = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    const url: string = `${this.todosUrl}/${todo.id}`;

    return this.http.delete<Todo>(url, httpOptions);
  }
}
