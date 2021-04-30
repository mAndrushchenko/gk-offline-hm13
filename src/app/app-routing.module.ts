import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';
import { CardsComponent } from './components/cards/cards.component';
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
  {path: 'images', component: ImagesComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'quotes', component: QuotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
