import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugrsSystemComponent } from './bugrs-system/bugrs-system.component';
import { BugrsSubmitFormComponent } from './bugrs-submit-form/bugrs-submit-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { BugrsSearchFormComponent } from './bugrs-search-form/bugrs-search-form.component';

@NgModule({
  declarations: [
    BugrsSystemComponent,
    BugrsSubmitFormComponent,
    BugrsSearchFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    BugrsSystemComponent,
    BugrsSearchFormComponent,
    BugrsSubmitFormComponent
  ]
})
export class BugrsModule { }
