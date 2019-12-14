import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugrsSystemComponent } from './bugrs-system/bugrs-system.component';
import { BugrsSubmitFormComponent } from './bugrs-submit-form/bugrs-submit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BugrsSystemComponent,
    BugrsSubmitFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BugrsSystemComponent,
    BugrsSubmitFormComponent,
  ]
})
export class BugrsModule { }
