import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BugrsRetrievalService } from '../bugrs-retrieval.service';
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
  priorityList: Array<string> = ['Minor', 'Major', 'Critical'];
  reporterList: Array<string> = ['QA', 'PO', 'DEV'];
  statusList: Array<string> = ['Ready for test', 'Done', 'Rejected'];
  bugID: string ;
  temp: string;
  Bug: any;

  constructor(private bugService: BugrsRetrievalService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.submitForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl()
    });

    this.bugID = this.activatedRoute.snapshot.params.id;
    this.getBug(this.bugID);
  }

  getBug(bugID: string) {
     this.bugService.getBug(bugID).subscribe(bugdetails => {
       this.submitForm.patchValue(bugdetails)  ,
       console.log(this.submitForm);
     }
     );
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
    if (this.bugID === '') {
      this.bugService.createBug(this.submitForm.value).pipe(
        tap(() => this.router.navigate(['']))
            ).subscribe();
    }
    else {
      this.bugService.updateBug(this.submitForm.value, this.bugID).pipe(
        tap(() => this.router.navigate(['']))
      ).subscribe();
    }
  }

  pushButtonCancel() {
    this.router.navigate(['']);
  }
}
