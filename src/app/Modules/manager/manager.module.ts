import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { EmployeeKraMappingdashboardComponent } from './employee-kra-mappingdashboard/employee-kra-mappingdashboard.component';
import { ManagerratingdashComponent } from './managerratingdash/managerratingdash.component';
import { ManagerAppraisalComponent } from './manager-appraisal/manager-appraisal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ManagerComponent,
    EmployeeKraMappingdashboardComponent,
    ManagerratingdashComponent,
    ManagerAppraisalComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
  ]
})
export class ManagerModule { }
