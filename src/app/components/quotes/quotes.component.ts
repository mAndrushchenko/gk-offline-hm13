import { AfterViewInit, Component } from '@angular/core'
import { IQuote, quotesData } from './quote/quote-data/data'
import { animate, style, transition, trigger } from "@angular/animations"
import { onDrag } from "../../services/drag-switcher"

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
  ]
})
export class QuotesComponent implements AfterViewInit {

  quoteTop!: IQuote
  quotesTop: IQuote[] = []

  quoteMiddle!: IQuote
  quotesMiddle: IQuote[] = []

  quoteBottom!: IQuote
  quotesBottom: IQuote[] = []

  startNumber = 0

  ngAfterViewInit() {
    onDrag('quotes', this.onPrev.bind(this), this.onNext.bind(this))
  }

  getQuoteList() {
    let count = 0
    quotesData.map(quote => {
      count++
      switch (count) {
        case 1:
          this.quotesTop = [...this.quotesTop, quote]
          break
        case 2:
          this.quotesMiddle = [...this.quotesMiddle, quote]
          break
        case 3:
          this.quotesBottom = [...this.quotesBottom, quote]
          count = 0
          break
        default:
          count = 0
      }
    })
  }

  switchQuote(count: number) {
    this.quoteTop = this.quotesTop[count]
    this.quoteMiddle = this.quotesMiddle[count]
    this.quoteBottom = this.quotesBottom[count]
  }

  onPrev() {
    if (!(this.startNumber <= 0)) {
      this.startNumber = this.startNumber - 1
      this.switchQuote(this.startNumber)
    } else {
      this.startNumber = 4
      this.switchQuote(this.startNumber)
    }
  }

  onNext() {
    if (!(this.startNumber >= 4)) {
      this.startNumber = this.startNumber + 1
      this.switchQuote(this.startNumber)
    } else {
      this.startNumber = 0
      this.switchQuote(this.startNumber)
    }
  }

  ngOnInit(): void {
    this.getQuoteList()
    this.switchQuote(this.startNumber)
  }
}
