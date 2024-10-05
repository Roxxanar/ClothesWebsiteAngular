
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {
  private apiUrl = 'http://localhost:3000/clothing';

  constructor(private http: HttpClient) {}

  getClothing(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
