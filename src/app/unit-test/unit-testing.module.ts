import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComponent } from './my/my.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MyComponent
  ]
})
export class UnitTestingModule { }
