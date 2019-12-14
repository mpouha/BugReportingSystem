import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.submitForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl()
    });
  }
}
