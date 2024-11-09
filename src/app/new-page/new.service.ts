import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  //private apiUrl = 'http://localhost:3000/allclothesnew';

  //constructor(private http: HttpClient) {}
  constructor(private apollo: Apollo) {}

  getNew(): Observable<any> {

    return this.apollo
    .query({
      query: gql`
      query {
        allClothesNew {
          AllClothesID
          IsNew
          IsAtSale
          Clothing {
            ID
            Name
            Photo
            Price
            Color
            Size
          }
          Shoes {
            ID
            Name
            Photo
            Price
            Color
            Size
          }
          Bags {
            ID
            Name
            Photo
            Price
            Color
            Size
          }
          Accessories {
            ID
            Name
            Photo
            Price
            Color
            Size
          }
        }
      }
      `,
    })
    .pipe(map((result: any) => result.data.newItems));




    //return this.http.get(this.apiUrl);
  }
}
