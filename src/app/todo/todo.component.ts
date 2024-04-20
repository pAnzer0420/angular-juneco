import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoItem = new FormControl('', Validators.required);
  todoList: string[] = [];

  async pushItemToList() {
    const todoItem = this.todoItem.value;
    try {
      const response = await axios.post('http://localhost:3000/todo', {
    itemName: todoItem,
      });
      this.todoList.push(response.data);
      this.todoItem.reset();
    } catch (error) {
      console.log('Error', error);
    }
  }
}
