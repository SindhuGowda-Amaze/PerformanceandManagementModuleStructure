import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SbuRoutingModule } from './sbu-routing.module';
import { SbuComponent } from './sbu.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SbuComponent
  ],
  imports: [
    CommonModule,
    SbuRoutingModule,
    SharedModule,
  ]
})
export class SbuModule { }
