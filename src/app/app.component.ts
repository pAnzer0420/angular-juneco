import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; 

@Component({
  selector: 'app-root',
  template: `<app-todo></app-todo>`, 
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TodoComponent] 
})
export class AppComponent {
  title = 'angular-test';
  todoList: string[] = [];

  pushItemToList(item: string): void {
    if (item) {
      this.todoList.push(item);
    }
  }

  getTodoListLength(): number {
    return this.todoList.length;
  }
}
