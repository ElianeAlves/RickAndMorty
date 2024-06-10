import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { enviroments } from '../../environments/environments';
import { Results } from '../models/results';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character$: Observable<any> | undefined

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    //sharedReplay mantém em cache a resposta da primeira requisição, portanto na navegação de rotas os dados estarão previamente carregados
    if (!this.character$) {
      this.character$ = this.http.get(`${enviroments.apiUrl}/character`).pipe(shareReplay(1))
    }
    return this.character$
  }

  getCharactersByName(name: string): Observable<any> {
    return this.http.get(`${enviroments.apiUrl}/character?name=${name}`)
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
