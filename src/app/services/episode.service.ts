import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { enviroments } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  episode$: Observable<any> | undefined

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<any> {
    //sharedReplay mantém em cache a resposta da primeira requisição, portanto na navegação de rotas os dados estarão previamente carregados
    if (!this.episode$) {
      this.episode$ = this.http.get(`${enviroments.apiUrl}/episode`).pipe(shareReplay(1))

    }
    return this.episode$
  }

}
