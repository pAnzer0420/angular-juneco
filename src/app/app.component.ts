import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
