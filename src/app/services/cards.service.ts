import { cardsData, ICard } from './modal/cards-data/data';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cards$ = new Subject<ICard[]>();
  private cardsList: ICard[] = [];
  private startNumber = 0;

  constructor() {
    this.cards$.next(this.cardsList);
  }

  setCardList(count = 0) {
    const length = cardsData.length;

    switch (count) {
      case -1:
        this.cardsList = [...cardsData.slice(length - 1), ...cardsData.slice(0, 2)];
        break;
      case -2:
        this.cardsList = [...cardsData.slice(length - 2, length + 2), ...cardsData.slice(0, 1)];
        this.startNumber = 13;
        break;
      case length - 2:
        this.cardsList = [...cardsData.slice(count, count + 2), ...cardsData.slice(0, 1)];
        break;
      case length - 1:
        this.cardsList = [...cardsData.slice(count, count + 1), ...cardsData.slice(0, 2)];
        this.startNumber = -1;
        break;
      default:
        this.cardsList = cardsData.slice(count, count + 3);
        break;
    }
    this.cards$.next(this.cardsList);
  }

  onPrev() {
    this.startNumber = this.startNumber - 1;
    this.setCardList(this.startNumber);
  }

  onNext() {
    this.startNumber = this.startNumber + 1;
    this.setCardList(this.startNumber);
  }

  getCardList() {
    return this.cards$.asObservable();
  }
}
