import { Component, Input } from '@angular/core';
import { ICard } from '../../../services/modal/cards-data/data';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: ICard;
}
