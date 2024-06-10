import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Results } from '../../models/results';
import { DataService } from './../../services/data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  data: Results[] = [];
  info: any = {
    next: '',
    prev: ''
  };

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getResults();
  }

  getResults(): void {
    this.characterService.getCharacters().subscribe((res: any) => {
      this.info = res.info;
      this.data = res.results;
    });
  }

  teste(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    // Você pode armazenar o valor em uma propriedade ou fazer outras operações

    this.characterService.getCharactersByName(inputValue).subscribe((res: any) => {
      console.log(res)
      this.data = res.results
    })
  }

  proxima(): void {
    if (this.info.next) {
      this.characterService.getNextPage(this.info.next).subscribe((res: any) => {
        this.info = res.info;
        this.data = res.results;
        window.scrollTo(0, 0);
      });
    }
  }

  anterior(): void {
    if (this.info.prev) {
      this.characterService.getPreviousPage(this.info.prev).subscribe((res: any) => {
        this.info = res.info;
        this.data = res.results;
        window.scrollTo(0, 0);
      });
    }
  }
}
