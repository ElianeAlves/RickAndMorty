import { Results } from './../../models/results';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnInit {
  character!: Results;
  otherCharacters!: Results[];
  id!: number;

  constructor(private route: ActivatedRoute,
    private dataService: DataService
  ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id

      this.dataService.getCharacterById(this.id).subscribe((res: any) => {
        this.character = res
      })
    })

    this.dataService.getCharacters().subscribe((res: any) => {
      this.otherCharacters = res.results.filter((item: Results) => item.id != this.id)
    })


  }

}
