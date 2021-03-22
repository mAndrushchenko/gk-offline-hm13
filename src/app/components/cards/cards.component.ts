import { AfterViewInit, Component } from '@angular/core'
import { cardsData } from "./card/cards-data/data"
import { Card } from './card/cards-data/data'
import { animate, style, transition, trigger } from "@angular/animations"
import { onDrag } from "../../services/drag-switcher"


@Component({
  selector: 'app-cards',
  animations: [
    trigger('cardAnim', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          marginBottom: 0,
          padding: 0,
        }),
        animate('50ms', style({
          height: '*',
          marginBottom: '*',
          padding: '*'
        })),
        animate(200)
      ]),
    ]),
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements AfterViewInit {
  startNumber: number = 0
  cards: Card[] = []

  getCardList(count: number) {
    const length = cardsData.length
    switch (count) {
      case -1:
        this.cards = [...cardsData.slice(length - 1), ...cardsData.slice(0, 2)]
        break
      case -2:
        this.cards = [...cardsData.slice(length - 2, length + 2), ...cardsData.slice(0, 1)]
        this.startNumber = 13
        break
      case length - 2:
        this.cards = [...cardsData.slice(count, count + 2), ...cardsData.slice(0, 1)]
        break
      case length - 1:
        this.cards = [...cardsData.slice(count, count + 1), ...cardsData.slice(0, 2)]
        this.startNumber = -1
        break
      default:
        this.cards = cardsData.slice(count, count + 3)
        break
    }
  }

  onPrev() {
    this.startNumber = this.startNumber - 1
    this.getCardList(this.startNumber)
  }

  onNext() {
    this.startNumber = this.startNumber + 1
    this.getCardList(this.startNumber)
  }

  ngAfterViewInit() {
    onDrag('cards', this.onPrev.bind(this), this.onNext.bind(this))
  }

  ngOnInit(): void {
    this.getCardList(this.startNumber)
  }
}
