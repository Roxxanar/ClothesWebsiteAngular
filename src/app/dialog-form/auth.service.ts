import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000'; // Change this to your backend URL

  constructor(private http: HttpClient) {}

  login(formValue: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, formValue);
  }

  signup(formValue: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, formValue);
  }
}
