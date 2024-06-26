import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterDetailsComponent } from './character-details.component';
import { CardComponent } from "../../components/card/card.component";


@NgModule({
    declarations: [CharacterDetailsComponent],
    imports: [
        CommonModule,
        CharacterDetailsRoutingModule,
        CardComponent
    ]
})
export class CharacterDetailsModule { }
