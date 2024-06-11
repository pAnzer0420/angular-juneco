import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
    providedIn: 'root'
}) 

export class Apiservice {
    constructor(private http: HttpClient) {}

    login = (data: any) => {
        console.log(`[client]: Sending login request to server with data: ${JSON.stringify(data)}`);

        return this.http.post (
            'https://its320-finals-be.onrender.com/user/login', data
        )
    }
}