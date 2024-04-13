import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoItem = new FormControl('', Validators.required);
  todoList: string[] = [];

  pushItemToList() {
    const todoItemValue = this.todoItem.value;

    if (todoItemValue && todoItemValue.trim() !== '') {
      this.todoList.push(todoItemValue);
      this.todoItem.reset();
    }
  }
}
