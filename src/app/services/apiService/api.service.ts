import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Make this service usable throughout the application
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //To initialize HttpClient under private varialbe http.
  constructor(private http: HttpClient) {}

  //Get function
  Get(module: string): Observable<any> {
    return this.http.get('http://localhost:3001/api/${module}');
  }
}
