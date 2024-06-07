import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CardComponent } from "../../components/card/card.component";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [CharacterListComponent],
    imports: [
        CommonModule,
        CharacterListRoutingModule,
        CardComponent
    ]
})
export class CharacterListModule { }
