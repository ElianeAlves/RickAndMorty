import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationListRoutingModule } from './location-list-routing.module';
import { LocationListComponent } from './location-list.component';
import { CardLocationComponent } from "../../components/card-location/card-location.component";


@NgModule({
    declarations: [LocationListComponent],
    imports: [
        CommonModule,
        LocationListRoutingModule,
        CardLocationComponent
    ]
})
export class LocationListModule { }
