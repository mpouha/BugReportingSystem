import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugrsSystemComponent } from './bugrs-system/bugrs-system.component';
import { BugrsSubmitFormComponent } from './bugrs-submit-form/bugrs-submit-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BugrsSystemComponent,
    BugrsSubmitFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BugrsSystemComponent,
    BugrsSubmitFormComponent,
  ]
})
export class BugrsModule { }
