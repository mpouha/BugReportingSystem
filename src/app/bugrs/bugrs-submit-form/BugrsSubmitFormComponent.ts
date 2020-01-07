/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { BugrsRetrievalService } from '../bugrs-system/bugrs-retrieval.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BugrsRetrievalService } from '../bugrs-retrieval.service';
import { ListStruct } from '../list-struct';

@Component({
  selector: 'brs-bugrs-submit-form',
  templateUrl: './bugrs-submit-form.component.html',
  styleUrls: ['./bugrs-submit-form.component.scss']
})
export class BugrsSubmitFormComponent implements OnInit {
  submitForm: FormGroup;
  CommentsForm: FormGroup;
  routeSubscription: Subscription;
  priorityList: Array<string> = ['Minor', 'Major', 'Critical'];
  reporterList: Array<string> = ['QA', 'PO', 'DEV'];
  statusList: Array<string> = ['Ready for Test', 'Done', 'Rejected'];
  bugID: string;
  temp: string;
  comments: ListStruct['comments'];
  constructor(private bugService: BugrsRetrievalService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.submitForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl(),
      comments: new FormControl(),
      //commentsdescription: new FormControl(),
      //commentsreporter: new FormControl(),
    });
    this.CommentsForm = new FormGroup({
      comments:  new FormArray([
          new FormGroup({
            _id: new FormControl(),
           description: new FormControl(),
           reporter: new FormControl(),
          }),
       ]),

     });
    this.bugID = this.activatedRoute.snapshot.params.id;
    this.getBug(this.bugID);
    console.log('to pire= ' + this.bugID);
  }
  getBug(bugID: string) {
    this.bugService.getBug(bugID).subscribe(console.log);
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
    this.bugService.createBug(this.submitForm.value).pipe(tap(() => this.router.navigate(['']))).subscribe();
  }
}
*/