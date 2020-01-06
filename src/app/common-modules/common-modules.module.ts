import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from './status-bar/status-bar.component';



@NgModule({
  declarations: [StatusBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StatusBarComponent
  ]
})
export class CommonModulesModule { }
