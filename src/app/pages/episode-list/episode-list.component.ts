import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss'
})
export class EpisodeListComponent implements OnInit {
  episodes: any;


  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getEpisodes().subscribe((res: any) => {
      if (res) {
        console.log(res)
        this.episodes = res.info
        this.episodes = res.results
      }
    })
  }


}
