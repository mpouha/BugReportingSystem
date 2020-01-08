import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [StatusBarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StatusBarComponent,
    FooterComponent
  ]
})
export class CommonModulesModule { }
