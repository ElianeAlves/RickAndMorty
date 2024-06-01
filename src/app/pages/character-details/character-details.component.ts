import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private dataService: DataService
  ){
    
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log(params.id)

      this.dataService.getCharacterById(params.id).subscribe((res: any) => {
        console.log(res)
      })
    })

    
  }

}
