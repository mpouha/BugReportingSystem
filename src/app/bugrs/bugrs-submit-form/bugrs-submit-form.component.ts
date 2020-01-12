import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BugrsRetrievalService } from '../bugrs-retrieval.service';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { comment } from '../comment';
import { ListStruct } from '../list-struct';

@Component({
  selector: 'brs-bugrs-submit-form',
  templateUrl: './bugrs-submit-form.component.html',
  styleUrls: ['./bugrs-submit-form.component.scss']
})
export class BugrsSubmitFormComponent implements OnInit {
  // @Input() comments: comment[];
  submitForm: FormGroup;
  CommentsForm: FormGroup;
  routeSubscription: Subscription;
  priorityList: Array<string> = ['Minor', 'Major', 'Critical'];
  reporterList: Array<string> = ['QA', 'PO', 'DEV'];
  statusList: Array<string> = ['Ready for test', 'Done', 'Rejected'];
  bugID: string;
  temp: string;
  bug: ListStruct;
  comment: comment;
  isStatusRequired = false;
  isButtonPressed: boolean = false;

  constructor(private bugService: BugrsRetrievalService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.submitForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      reporter: new FormControl(null, Validators.required),
      status: new FormControl(),


    });
    this.CommentsForm = new FormGroup({
      reporter: new FormControl(),
      description: new FormControl(),
    });
    this.bugID = this.activatedRoute.snapshot.params.id;
    this.getBug(this.bugID);
    console.log('to pire= ' + this.bugID);

  }

  getBug(bugID: string) {
    this.bugService.getBug(bugID).subscribe((bugdetails: ListStruct) => {
      this.bug = bugdetails;
      this.submitForm.patchValue(bugdetails);
    }
    );
  }

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
    } else {
      this.informbug();
      this.bugService.update(this.bug).subscribe(response => {
        this.bug = response;
      });
    }
    this.router.navigate(['']);
  }

  informbug() {
    this.bug.description = this.submitForm.controls.description.value;
    this.bug.priority = this.submitForm.controls.priority.value;
    this.bug.reporter = this.submitForm.controls.reporter.value;
    this.bug.status = this.submitForm.controls.status.value;
    this.bug.title = this.submitForm.controls.title.value;
  }

  pushButtonCancel() {
    this.router.navigate(['']);
  }

  submitComment() {
    this.bug.comments = this.bug.comments || [];
    console.log(this.bug.comments);
    if (!this.CommentsForm.controls.reporter.value || !this.CommentsForm.controls.description.value) {
      return;
    } else {
      this.bug.comments.push(this.CommentsForm.value);
      console.log(this.bug, this.bug.comments.length);
      if (this.bugID) {
        this.bugService.update(this.bug).subscribe(response => {
          this.bug = response;
        });
      }
      this.CommentsForm.controls.reporter.reset();
      this.CommentsForm.controls.description.reset();
    }
  }

  valueOfReporterChange() {
    if (this.submitForm.controls.reporter.value === 'QA') {
      console.log('mpike');
      this.submitForm.controls.status.setValidators(Validators.required);
    } else {
      this.submitForm.controls.status.clearValidators();
    }
    this.submitForm.controls.status.updateValueAndValidity();
  }


  openCommentScreen() {
    this.isButtonPressed = true;
  }

  closeCommentScreen() {
    this.isButtonPressed = false;
  }
}

