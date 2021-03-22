import { Component, Input } from '@angular/core'
import { Card } from "./cards-data/data"


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Card
}
