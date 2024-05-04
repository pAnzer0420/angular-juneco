import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class TodoComponent implements OnInit {
  newItem = '';
  temporaryList: string[] = [];
  savedLists: { id: string; owner: string; items: string[] }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.temporaryList = [];
    this.fetchSavedLists();
  }

  addItem() {
    if (this.newItem.trim()) {
      this.temporaryList.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.temporaryList.splice(index, 1);
  }

  saveList() {
    const owner = prompt('Enter name for this list:');
    if (owner && this.temporaryList.length > 0) {
      this.http
        .post('http://localhost:3000/lists', {
          owner,
          items: this.temporaryList,
        })
        .subscribe(
          (response: any) => {
            this.savedLists.push(response);
            this.temporaryList = [];
          },
          (error) => {
            console.error('Error saving list:', error);
          }
        );
    }
  }

  fetchSavedLists() {
    this.http.get('http://localhost:3000/lists').subscribe(
      (response: any) => {
        this.savedLists = response;
      },
      (error) => {
        console.error('Error fetching lists:', error);
      }
    );
  }

  deleteList(listId: string) {
    this.http.delete(`http://localhost:3000/lists/${listId}`).subscribe(
      () => {
        this.savedLists = this.savedLists.filter((list) => list.id !== listId);
      },
      (error) => {
        console.error('Error deleting list:', error);
      }
    );
  }
}
