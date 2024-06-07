import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-location',
  standalone: true,
  imports: [],
  templateUrl: './card-location.component.html',
  styleUrl: './card-location.component.scss'
})
export class CardLocationComponent {
@Input() item: any
}
