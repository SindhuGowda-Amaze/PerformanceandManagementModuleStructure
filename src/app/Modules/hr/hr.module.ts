import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRRoutingModule } from './hr-routing.module';
import { HRComponent } from './hr.component';
import { HrdashboardComponent } from './hrdashboard/hrdashboard.component';
import { HrappraisalCycleComponent } from './hrappraisal-cycle/hrappraisal-cycle.component';
import { AppraisalFormComponent } from './appraisal-form/appraisal-form.component';
import { KeyPerformaceIndicatorComponent } from './key-performace-indicator/key-performace-indicator.component';
import { KeyPerformaceIndicatorformComponent } from './key-performace-indicatorform/key-performace-indicatorform.component';
import { KeyResultAreaComponent } from './key-result-area/key-result-area.component';
import { KeyResultAreasFormComponent } from './key-result-areas-form/key-result-areas-form.component';
import { HrDashComponent } from './hr-dash/hr-dash.component';
import { BellCurveFittingComponent } from './bell-curve-fitting/bell-curve-fitting.component';
import { StaffScoreReportComponent } from './staff-score-report/staff-score-report.component';
import { AppraisalReportComponent } from './appraisal-report/appraisal-report.component';
import { SharedModule } from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    HRComponent,
    HrdashboardComponent,
    HrappraisalCycleComponent,
    AppraisalFormComponent,
    KeyPerformaceIndicatorComponent,
    KeyPerformaceIndicatorformComponent,
    KeyResultAreaComponent,
    KeyResultAreasFormComponent,
    HrDashComponent,
    BellCurveFittingComponent,
    StaffScoreReportComponent,
    AppraisalReportComponent
  ],
  imports: [
    CommonModule,
    HRRoutingModule,
    SharedModule,
   
  ]
})
export class HRModule { }
