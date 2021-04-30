import { Component, Input } from '@angular/core';
import { IQuote } from '../../../services/modal/quote-data/data';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input() quote!: IQuote;
}
