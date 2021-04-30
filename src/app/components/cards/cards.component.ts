import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { onDrag } from '../../services/drag-switcher';
import { CardsService } from '../../services/cards.service';
import { ICard } from '../../services/modal/cards-data/data';


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
          padding: 0
        }),
        animate('50ms', style({
          height: '*',
          marginBottom: '*',
          padding: '*'
        })),
        animate(200)
      ])
    ])
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterViewInit {
  public cards: ICard[] = [];
  private screenWidth = window.innerWidth;
  amountOfCards = this.screenWidth > 1650 ? 0 : this.screenWidth > 1200 ? 1 : 2;

  constructor(private cards$: CardsService) {

    this.getCards();
  }

  getCards() {
    this.cards$.getCardList().subscribe(cardsData => {
      this.cards = cardsData;
    });
  }

  changeCardsAmount(newValue: number) {
    this.amountOfCards = newValue;
  }

  onPrev() {
    this.cards$.onPrev();
  }

  onNext() {
    this.cards$.onNext();
  }

  ngAfterViewInit() {
    onDrag('cards', this.onPrev.bind(this), this.onNext.bind(this));
  }

  ngOnInit(): void {
    this.cards$.setCardList();
  }
}
