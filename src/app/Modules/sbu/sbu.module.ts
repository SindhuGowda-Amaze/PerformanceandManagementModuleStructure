import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SbuRoutingModule } from './sbu-routing.module';
import { SbuComponent } from './sbu.component';


@NgModule({
  declarations: [
    SbuComponent
  ],
  imports: [
    CommonModule,
    SbuRoutingModule
  ]
})
export class SbuModule { }
