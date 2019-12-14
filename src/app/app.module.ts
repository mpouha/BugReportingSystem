import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BugrsModule } from './bugrs/bugrs.module';
import { HttpClientModule } from '@angular/common/http';
import { BugrsSystemComponent } from './bugrs/bugrs-system/bugrs-system.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BugrsSubmitFormComponent, } from './bugrs/bugrs-submit-form/bugrs-submit-form.component';


const routes: Routes = [
    {path : '', component: BugrsSystemComponent},
    {path : 'submitbug', component: BugrsSubmitFormComponent },

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BugrsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
