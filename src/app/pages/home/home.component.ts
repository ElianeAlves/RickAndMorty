import { CommonModule, registerLocaleData } from '@angular/common';
import { Results } from './../../models/results';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { RouterModule } from '@angular/router';
import { CardEpisodeComponent } from "../../components/card-episode/card-episode.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CardComponent, RouterModule, CardEpisodeComponent]
})
export class HomeComponent implements OnInit {
  characters!: Results[];
  location: any;
  episodes: any;
  infoCharacters: any;
  infoEpisodes: any;
  infoLocation: any;
  constructor(private DataService: DataService) {

  }
  ngOnInit(): void {
    this.getResults()
  }

  getResults() {


    this.DataService.getCharacters().subscribe((res: any) => {
      console.log(res)
      if (res) {
        this.infoCharacters = res.info
        this.characters = res.results
        console.log('personagens', this.infoCharacters)

      }
    })

    this.DataService.getEpisodes().subscribe((res: any) => {
      if (res) {
        this.infoEpisodes = res.info
        this.episodes = res.results
        console.log('episodios', res)
      }

    })

    this.DataService.getLocation().subscribe((res: any) => {
      if (res) {
        this.infoLocation = res.info
        this.location = res.results
        console.log('locais', res)
      }

    })
  }
}
