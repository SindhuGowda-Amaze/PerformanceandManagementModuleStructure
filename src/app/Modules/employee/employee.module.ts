import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MyappraisalComponent } from './myappraisal/myappraisal.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    EmployeeComponent,
    MyappraisalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

 
   

  ]
})
export class EmployeeModule { }
