import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BugrsRetrievalService } from '../bugrs-system/bugrs-retrieval.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'brs-bugrs-submit-form',
  templateUrl: './bugrs-submit-form.component.html',
  styleUrls: ['./bugrs-submit-form.component.scss']
})
export class BugrsSubmitFormComponent implements OnInit {

  submitForm: FormGroup;
  routeSubscription: Subscription;
  priorityList: Array<String> = ["Minor", "Major", "Critical"];
  reporterList: Array<String> = ["QA", "PO", "DEV"];
  statusList: Array<string> = ["Ready for Test", "Done", "Rejected"];
  bugID: string;
  temp: string;
 // constructor(private route: ActivatedRoute) {

 // }

  constructor(private bugService: BugrsRetrievalService, private router: Router) { }

  ngOnInit() {
    this.submitForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl()

    });
    // this.routeSubscription = this.route.params.subscribe((p) => {
    // console.log(p.id); });
    // const temp : string;
    this.temp = window.location.href;
    this.bugID = this.temp.slice(this.temp.indexOf('=') + 1, this.temp.length);
    // this.bugID = window.location.href;
    console.log('to pire= ' + this.bugID);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // TODOOOOO
    // Add 'implements OnDestroy' to the class.
  }


  addEditBug() {
    if (this.submitForm.invalid) {
      return;
    }

    this.bugService.createBug(this.submitForm.value).pipe(
      tap(() => this.router.navigate(['']))
    ).subscribe();
  }
}
