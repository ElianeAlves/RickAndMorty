import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import localePtBr from '@angular/common/locales/pt';
registerLocaleData(localePtBr)

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HttpClientModule, NavbarComponent, FooterComponent],
})
export class AppComponent implements OnInit {

  title = 'rick-and-morty-dashboard';
  isAuthenticated: boolean = false;

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
    });
  }

}
