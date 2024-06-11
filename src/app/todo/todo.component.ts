import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Apiservice } from './services/api.service';
import { GlobalService } from '../global.service';

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
	savedLists: any = [];

	constructor(
		private http: HttpClient,
		private apiservice: Apiservice,
		private globalService: GlobalService,
	) {}

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
		const title = prompt('Enter title for this list:');
		const user_id = this.globalService.user_id;

		const list: any = {
			title: title,
			user_id: user_id,
		}

		console.log(`[client]: Saving list: ${JSON.stringify(list)}`);

		if (title && this.temporaryList.length > 0) {
			this.apiservice.saveList(list).subscribe((response) => {
				this.temporaryList.forEach((taskDescription) => {
					const task = {
						description: taskDescription,
						list_id: response.toString(),
					};

					this.apiservice.saveTask(task).subscribe(() => {
					})
				});
			})
		}
	}

	fetchSavedLists() {
		this.apiservice.fetchSavedLists(this.globalService.user_id).subscribe((response) => {
			console.log(`[client]: Fetched lists: ${JSON.stringify(response)}`);
			this.savedLists = response;
		})
	}

	deleteList(listId: string) {
		this.apiservice.deleteList(listId).subscribe(() => {
			// this.savedLists = this.savedLists.filter(list => list.id !== listId)
			this.fetchSavedLists();
		})
	}

	deleteUser() {
		this.apiservice.deleteUser(this.globalService.user_id).subscribe(() => {})
	}
}
