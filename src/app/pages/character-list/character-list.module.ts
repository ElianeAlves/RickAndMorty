import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CardComponent } from "../../components/card/card.component";


@NgModule({
    declarations: [CharacterListComponent],
    imports: [
        CommonModule,
        CharacterListRoutingModule,
        CardComponent
    ]
})
export class CharacterListModule { }
