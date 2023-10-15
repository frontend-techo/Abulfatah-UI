import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { BooksDetailsComponent } from './components/books-details/books-details.component';


@NgModule({
  declarations: [
    BooksPageComponent,
    BooksDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { 

  constructor()
  {
    console.log('BooksModule loaded');
  }
}
