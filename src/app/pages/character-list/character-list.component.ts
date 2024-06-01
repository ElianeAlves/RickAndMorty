import { Results } from '../../models/results';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {
  data!: Results[];
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
  }
}
