import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRRoutingModule } from './hr-routing.module';
import { HRComponent } from './hr.component';
import { HrdashboardComponent } from './hrdashboard/hrdashboard.component';
import { HrappraisalCycleComponent } from './hrappraisal-cycle/hrappraisal-cycle.component';


@NgModule({
  declarations: [
    HRComponent,
    HrdashboardComponent,
    HrappraisalCycleComponent
  ],
  imports: [
    CommonModule,
    HRRoutingModule
  ]
})
export class HRModule { }
