import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser = { username: 'user@gmail.com', password: 'password' };
  //isAuthenticated é um observable para as telas tratarem exibição de conteúdo ou não caso não esteja logado
  private _isAuthenticated = new BehaviorSubject<boolean>(this.checkInitialAuthState());
  public isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  /* IsPlatformbrowser para identificar a inicialização do localstorage do lado do browser, 
  pois na servidor não possui, fica apresentando erro de console (localstorage not defined) */
  private checkInitialAuthState(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  login(username: string, password: string): boolean {
    if (username === this.mockUser.username && password === this.mockUser.password) {
      if (isPlatformBrowser(this.platformId)) {
        //Não implemetado token de validação de usuário com JWT, apenas exemplo de item de usuário armazenado lo localStorage
        localStorage.setItem('authToken', 'mockToken');
        this._isAuthenticated.next(true);
        this.router.navigate(['/home']);
        return true;
      }
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('authToken');
      this._isAuthenticated.next(false);
      this.router.navigate(['/login']);
    }
  }

  isLoggedIn(): boolean {
    return this._isAuthenticated.value;
  }
}
