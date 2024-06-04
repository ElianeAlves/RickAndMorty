import { DataService } from './services/data.service';
import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'rick-and-morty-dashboard';

  
}
