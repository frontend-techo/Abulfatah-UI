import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquranRoutingModule } from './alquran-routing.module';
import { AlquranPageComponent } from './pages/alquran-page/alquran-page.component';
import {PrimeNgModule} from '../shared/primeng.module'

@NgModule({
  declarations: [
    AlquranPageComponent
  ],
  imports: [
    CommonModule,
    AlquranRoutingModule,
    PrimeNgModule
  ]
})
export class AlquranModule { }
