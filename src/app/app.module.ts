import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BugrsModule } from './bugrs/bugrs.module';
import { HttpClientModule } from '@angular/common/http';
import { BugrsSystemComponent } from './bugrs/bugrs-system/bugrs-system.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BugrsSubmitFormComponent, } from './bugrs/bugrs-submit-form/bugrs-submit-form.component';
import { CommonModulesModule } from './common-modules/common-modules.module';
import {MatTooltipModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    {path : '', component: BugrsSystemComponent},
    {path : 'submitbug', component: BugrsSubmitFormComponent },
    {path : 'submitbug/:id', component: BugrsSubmitFormComponent },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BugrsModule,
    CommonModulesModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
