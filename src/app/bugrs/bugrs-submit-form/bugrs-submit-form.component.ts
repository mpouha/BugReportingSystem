import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  priorityList: Array<String> = ["Minor","Major","Critical"];
  reporterList: Array<String> = ["QA","PO","DEV"];
  statusList: Array<string> = ["Ready for Test","Done","Rejected"];

  constructor(private bugService: BugrsRetrievalService, private router: Router) { }

  ngOnInit() {
    this.submitForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl()
    });
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
