import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string): Observable<any> {
    const user = { username, email, password };
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  isAuthenticated(): boolean {
    // Here we check if a token exists in localStorage, which indicates the user is authenticated
    return !!localStorage.getItem('token');
  }

 
}
