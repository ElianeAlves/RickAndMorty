import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from '../../environments/environments';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location$: Observable<any> | undefined

  constructor(private http: HttpClient) { }

  getLocation(): Observable<any> {
    //sharedReplay mantém em cache a resposta da primeira requisição, portanto na navegação de rotas os dados estarão previamente carregados
    if (!this.location$) {
      this.location$ = this.http.get(`${enviroments.apiUrl}/location`).pipe(shareReplay(1))

    }
    return this.location$
  }
}
