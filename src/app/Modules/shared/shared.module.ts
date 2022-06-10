import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
