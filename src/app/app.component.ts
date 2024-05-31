import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rick-and-morty-dashboard';

  constructor(private DataService: DataService){
    this.DataService.getData().subscribe((res: any) => {
    })

    this.DataService.getCharacters().subscribe((res: any) => {
      console.log(res)
    })
  }
}
