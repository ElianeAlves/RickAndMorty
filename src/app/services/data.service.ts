import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api')
  }

  getCharacters(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
