import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeListRoutingModule } from './episode-list-routing.module';
import { EpisodeListComponent } from './episode-list.component';
import { CardEpisodeComponent } from "../../components/card-episode/card-episode.component";


@NgModule({
    declarations: [EpisodeListComponent],
    imports: [
        CommonModule,
        EpisodeListRoutingModule,
        CardEpisodeComponent
    ]
})
export class EpisodeListModule { }
