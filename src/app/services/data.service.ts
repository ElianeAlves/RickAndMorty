import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from '../../environments/environments';
import { Results } from '../models/results';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(enviroments.apiUrl)
  }

  getCharacters(): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/character`)
  }
  getCharactersFilterAlive(): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/character?status=alive`)
  }
  getCharactersFilterDead(): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/character?status=dead`)
  }
  getCharactersByName(name: string): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/character?name=${name}`)
  }

  getEpisodes(): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/episode`)

  }

  getLocation(): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/location`)

  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/character/${id}`)

  }

  getNextPage(url: string): Observable<Results> {
    return this.http.get<Results>(url);
  }

  getPreviousPage(url: string): Observable<Results> {
    return this.http.get<Results>(url);
  }
}
