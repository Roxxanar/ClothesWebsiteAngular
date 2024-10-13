import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  private apiUrl = 'http://localhost:3000/allclothes';

  constructor(private http: HttpClient) {}

  getNew(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
