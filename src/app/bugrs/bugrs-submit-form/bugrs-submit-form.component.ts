import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BugrsRetrievalService } from '../bugrs-retrieval.service';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { bugComment } from '../comment-struct';
import { ListStruct } from '../list-struct';

@Component({
  selector: 'brs-bugrs-submit-form',
  templateUrl: './bugrs-submit-form.component.html',
  styleUrls: ['./bugrs-submit-form.component.scss']
})
export class BugrsSubmitFormComponent implements OnInit {
  @Input() comments: bugComment[];
  //@Output() comment: bugComment;
  submitForm: FormGroup;
  CommentsForm: FormGroup;
  routeSubscription: Subscription;
  priorityList: Array<string> = ['Minor', 'Major', 'Critical'];
  reporterList: Array<string> = ['QA', 'PO', 'DEV'];
  statusList: Array<string> = ['Ready for test', 'Done', 'Rejected'];
  bugID: string ;
  temp: string;
  bug: ListStruct;
  comment: bugComment;

  constructor(private bugService: BugrsRetrievalService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.submitForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl(),


    });
    this.CommentsForm = new FormGroup({
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
    //this.CommentsForm.patchValue(this.comments);
    console.log(this.bug.comments);
    console.log("forma"+this.CommentsForm.value);
    /*if (!this.comment.reporter || !this.comment.description) {
      this.toastr.warning(
        `You didn't add a comment`
      );
      return;
    } else {*/
   /*   this.bugService.updateBug(this.bug.comments.reporter, this.comment.description);
      this.bug.reporter = undefined;
      this.bug.description = undefined;
    //}*/
  }
}
