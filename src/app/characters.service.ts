import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Origin': '*'
//   })
// };
@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  charactersUrl = 'https://swapi.co/api/people';
  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(this.charactersUrl);
  }
}
