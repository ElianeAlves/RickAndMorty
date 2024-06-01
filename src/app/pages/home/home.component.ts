import { CommonModule } from '@angular/common';
import { Results } from './../../models/results';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CardComponent, RouterModule]
})
export class HomeComponent implements OnInit {
  data!: Results[];
  location: any;
  episodes: any;
  constructor(private DataService: DataService) {

  }
  ngOnInit(): void {
    this.getResults()
  }

  getResults() {
    this.DataService.getData().subscribe((res: any) => {
      console.log(res)
    })

    this.DataService.getCharacters().subscribe((res: any) => {
      this.data = res.results
    })

    this.DataService.getEpisodes().subscribe((res: any) => {
      this.episodes = res.results
      console.log(this.episodes)
    })

    this.DataService.getLocation().subscribe((res: any) => {
      this.location = res.results
    })
  }
}
