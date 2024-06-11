import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class GlobalService {
	private _user_id: string;

	constructor() {
		this._user_id = '';
	}

	set user_id(value: string) {
		this._user_id = value;
	}

	get user_id(): string {
		return this._user_id;
	}
}
