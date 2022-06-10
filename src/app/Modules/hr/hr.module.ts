import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRRoutingModule } from './hr-routing.module';
import { HRComponent } from './hr.component';
import { HrdashboardComponent } from './hrdashboard/hrdashboard.component';


@NgModule({
  declarations: [
    HRComponent,
    HrdashboardComponent
  ],
  imports: [
    CommonModule,
    HRRoutingModule
  ]
})
export class HRModule { }
