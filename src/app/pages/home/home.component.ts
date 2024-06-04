import { CommonModule, registerLocaleData } from '@angular/common';
import { Results } from './../../models/results';
import { DataService } from './../../services/data.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { RouterModule } from '@angular/router';
import { CardEpisodeComponent } from "../../components/card-episode/card-episode.component";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CardComponent, RouterModule, CardEpisodeComponent]
})
export class HomeComponent implements OnInit, AfterViewInit {
  characters!: Results[];
  location: any;
  episodes: any;
  infoCharacters: any;
  infoEpisodes: any;
  infoLocation: any;
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart<'doughnut', number[], string>;
  totalAlive: any;
  totalDead: any;
  
  constructor(private DataService: DataService) {

  }
  ngOnInit(): void {
    this.getResults()
  }

  getResults() {
    this.DataService.getCharacters().subscribe((res: any) => {
      if (res) {
        this.infoCharacters = res.info
        this.characters = res.results
      }
    })

    this.DataService.getCharactersFilterAlive().subscribe((res: any) => {
      this.totalAlive = res.info.count
    })
    this.DataService.getCharactersFilterDead().subscribe((res: any) => {
      this.totalDead = res.info.count
    })

    this.DataService.getEpisodes().subscribe((res: any) => {
      if (res) {
        console.log(res)
        this.infoEpisodes = res.info
        this.episodes = res.results
      }
    })

    this.DataService.getLocation().subscribe((res: any) => {
      if (res) {
        this.infoLocation = res.info
        this.location = res.Results
      }
    })
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const context = this.myChart.nativeElement.getContext('2d');
    if (context) {
      this.chart = new Chart(context, {
        type: 'doughnut',
        data: {
          labels: ['Vivos', 'Mortos', `Total: ${this.infoCharacters.count}`],
          datasets: [{
            data: [this.totalAlive, this.totalDead, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  }
}
