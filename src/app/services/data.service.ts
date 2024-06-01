import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from '../../environments/environments';

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

  getEpisodes(): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/episode`)

  }

  getLocation(): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/location`)

  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/character/${id}`,)

  }
}
