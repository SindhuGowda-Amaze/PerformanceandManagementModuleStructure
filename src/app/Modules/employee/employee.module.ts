import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from '../shared/shared.module';
import { MyappraisalComponent } from './myappraisal/myappraisal.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    EmployeeComponent,
    MyappraisalComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    FormsModule,
    EmployeeRoutingModule,
    NgxPaginationModule,


 
   

  ]
})
export class EmployeeModule { }
