import { AfterViewInit, Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { onDrag } from '../../services/drag-switcher';
import { QuotesService, TQuotesData } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  animations: [
    trigger('quoteAnim', [
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
  ]
})
export class QuotesComponent implements OnInit, AfterViewInit {

  quotes!: TQuotesData;

  constructor(private quotes$: QuotesService) {
  }

  ngOnInit(): void {
    this.getQuotes();
    this.quotes$.setQuoteList();
    this.quotes$.switchQuote();
  }

  getQuotes() {
    this.quotes$.getQuoteList().subscribe(quotesData => {
      this.quotes = quotesData;
    });
  }

  ngAfterViewInit() {
    onDrag('quotes', this.onPrev.bind(this), this.onNext.bind(this));
  }

  onPrev() {
    this.quotes$.onPrev();
  }

  onNext() {
    this.quotes$.onNext();
  }

}
