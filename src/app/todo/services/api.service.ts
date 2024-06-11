import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
    providedIn: 'root'
}) 

export class Apiservice {
    constructor(private http: HttpClient) {}

    saveList = (data: any) => {
        console.log(`[client]: Sending list to server with data: ${JSON.stringify(data)}`);

        return this.http.post (
            'https://its320-finals-be.onrender.com/list/save', data
        )
    }

    saveTask = (data: any) => {
        console.log(`[client]: Sending task to server with data: ${JSON.stringify(data)}`);

        return this.http.post (
            'https://its320-finals-be.onrender.com/task/save', data
        )
    }

    fetchSavedLists(data: string) {
        console.log('[client]: Fetching saved lists from server');
    
        return this.http.post(
            'https://its320-finals-be.onrender.com/list/all', data
        );
    }
    
    deleteList(listId: string) {
        console.log(`[client]: Deleting list with id: ${listId}`);
    
        return this.http.delete(
            `https://its320-finals-be.onrender.com/list/delete/${listId}`
        );
    }

    deleteUser(user_id: string) {
        console.log(`[client]: Deleting user with id: ${user_id}`);
    
        return this.http.delete(
            `https://its320-finals-be.onrender.com/user/delete/${user_id}`
        );
    }
} 