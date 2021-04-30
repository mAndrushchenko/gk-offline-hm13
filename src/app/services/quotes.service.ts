import { IQuote, quotesData } from './modal/quote-data/data';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type TQuotesData = {
  quoteTop: IQuote,
  quotesTop: IQuote[],
  quoteMiddle: IQuote,
  quotesMiddle: IQuote[],
  quoteBottom: IQuote,
  quotesBottom: IQuote[],
};

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quotes$ = new Subject<TQuotesData>();

  private defaultQuote: IQuote = {
    text: '',
    author: ''
  };

  private startNumber = 0;

  private quotes: TQuotesData = {
    quoteTop: this.defaultQuote,
    quotesTop: [],
    quoteMiddle: this.defaultQuote,
    quotesMiddle: [],
    quoteBottom: this.defaultQuote,
    quotesBottom: []
  };

  constructor() {
    this.quotes$.next(this.quotes);
  }

  setQuoteList() {
    let count = 0;
    quotesData.map(quote => {
      count++;
      switch (count) {
        case 1:
          this.quotes.quotesTop = [...this.quotes.quotesTop, quote];
          break;
        case 2:
          this.quotes.quotesMiddle = [...this.quotes.quotesMiddle, quote];
          break;
        case 3:
          this.quotes.quotesBottom = [...this.quotes.quotesBottom, quote];
          count = 0;
          break;
        default:
          count = 0;
      }
    });
    this.quotes$.next(this.quotes);
  }

  switchQuote(count = 0) {
    this.quotes.quoteTop = this.quotes.quotesTop[count];
    this.quotes.quoteMiddle = this.quotes.quotesMiddle[count];
    this.quotes.quoteBottom = this.quotes.quotesBottom[count];
    this.quotes$.next(this.quotes);
  }

  onPrev() {
    this.startNumber = !(this.startNumber <= 0) ? this.startNumber - 1 : 4;
    this.switchQuote(this.startNumber);
  }

  onNext() {
    this.startNumber = !(this.startNumber >= 4) ? this.startNumber + 1 : 0;
    this.switchQuote(this.startNumber);
  }

  getQuoteList() {
    return this.quotes$.asObservable();
  }
}
