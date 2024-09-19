import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/';  

  constructor(private http: HttpClient) { }

  
  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  
  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  
  updateUser(id: number, data: any): Observable<any> {
     return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
