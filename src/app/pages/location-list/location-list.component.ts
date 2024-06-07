import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent implements OnInit {
  location: any;
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getLocation().subscribe((res: any) => {
      if (res) {
        this.location = res.results
      }
    })
  }
}
