import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, concat } from 'rxjs';
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
  @Input() comments: comment[];
  submitForm: FormGroup;
  CommentsForm: FormGroup;
  routeSubscription: Subscription;
  priorityList: Array<string> = ['Minor', 'Major', 'Critical'];
  reporterList: Array<string> = ['QA', 'PO', 'DEV'];
  statusList: Array<string> = ['Ready for test', 'Done', 'Rejected'];
  bugID: string ;
  temp: string;
  bug: ListStruct;
  comment: comment;
  isStatusRequired = false;

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
      _id: new FormControl(),
      reporter: new FormControl(),
      description: new FormControl(),
    });
  //  this.comment= ['','',''];
    this.bugID = this.activatedRoute.snapshot.params.id;
    this.getBug(this.bugID);
    console.log('to pire= ' + this.bugID);
  }
     getBug(bugID: string) {
      this.bugService.getBug(bugID).subscribe((bugdetails: ListStruct ) => {
        this.bug = bugdetails;
        this.submitForm.patchValue(bugdetails);
       // this.CommentsForm.patchValue(bugdetails.comments);
      }
      );
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // TODOOOOO
    // Add 'implements OnDestroy' to the class.
  }
  addEditBug()  {
    if (this.submitForm.invalid) {
      return;
    }
    if (this.bugID === '') {
      this.bugService.createBug(this.submitForm.value).pipe(
        tap(() => this.router.navigate(['']))
            ).subscribe();
    } else {
      this.bugService.updateBug(this.submitForm.value, this.bugID).pipe(
        tap(() => this.router.navigate(['']))
      ).subscribe();
    }
  }
  pushButtonCancel() {
    this.router.navigate(['']);
  }
  submitComment() {
    this.bug.comments = this.bug.comments || [];
    console.log(this.bug.comments);
    this.CommentsForm.controls['_id'].setValue(this.bugID.slice(0,this.bugID.length-1)+(this.bug.comments.length+1));
    this.bug.comments.push(this.CommentsForm.value);

    console.log(this.bug,this.bug.comments.length);
    if (this.bugID) {
      this.bugService.updateBug(this.bug,this.bugID);
    }
    // this.bug.reporter = undefined;
    //  this.bug.description = undefined;
    }

    valueOfReporterChange(){
      if (this.submitForm.controls.reporter.value === 'QA'){
        console.log('mpike');
        this.submitForm.controls.status.setValidators(Validators.required);
      }
      else {
        this.submitForm.controls.status.clearValidators();
      }
      this.submitForm.controls.status.updateValueAndValidity();
    }

  }

