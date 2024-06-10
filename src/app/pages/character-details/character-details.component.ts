import { CharacterService } from './../../services/character.service';
import { Results } from './../../models/results';
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
    private characterService: CharacterService
  ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id

      this.characterService.getCharacterById(this.id).subscribe((res: any) => {
        this.character = res
      })
    })

    this.characterService.getCharacters().subscribe((res: any) => {
      this.otherCharacters = res.results.filter((item: Results) => item.id != this.id)
    })
  }

}
