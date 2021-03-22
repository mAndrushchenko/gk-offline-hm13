import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component'
import { ImagesComponent } from './components/images/images.component'
import { CardsComponent } from './components/cards/cards.component'
import { ImageComponent } from './components/images/image/image.component'
import { CardComponent } from './components/cards/card/card.component'
import { QuotesComponent } from './components/quotes/quotes.component'
import { QuoteComponent } from './components/quotes/quote/quote.component'

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    CardsComponent,
    CardComponent,
    QuotesComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
