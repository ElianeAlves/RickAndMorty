import { Component, OnInit } from '@angular/core';
import { Results } from '../../models/results';
import { DataService } from './../../services/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getResults();
  }

  getResults(): void {
    this.dataService.getCharacters().subscribe((res: any) => {
      console.log(res);
      this.info = res.info;
      this.data = res.results;
    });
  }

  teste(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    console.log('Valor do input:', inputValue);
    // Você pode armazenar o valor em uma propriedade ou fazer outras operações

    this.dataService.getCharactersByName(inputValue).subscribe((res: any) => {
      console.log(res)
      this.data = res.results
    })
  }

  proxima(): void {
    if (this.info.next) {
      this.dataService.getNextPage(this.info.next).subscribe((res: any) => {
        console.log(res);
        this.info = res.info;
        this.data = res.results;
        window.scrollTo(0, 0);
      });
    }
  }

  anterior(): void {
    if (this.info.prev) {
      this.dataService.getPreviousPage(this.info.prev).subscribe((res: any) => {
        console.log(res);
        this.info = res.info;
        this.data = res.results;
        window.scrollTo(0, 0);
      });
    }
  }
}
