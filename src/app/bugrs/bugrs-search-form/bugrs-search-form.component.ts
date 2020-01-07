import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'brs-bugrs-search-form',
  templateUrl: './bugrs-search-form.component.html',
  styleUrls: ['./bugrs-search-form.component.scss']
})
export class BugrsSearchFormComponent implements OnInit {

  searchForm: FormGroup;
  priorityList: Array<string> = ['Minor', 'Major', 'Critical'];
  reporterList: Array<string> = ['QA', 'PO', 'DEV'];
  statusList: Array<string> = ['Ready for test', 'Done', 'Rejected'];

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      title: new FormControl(),
      priority: new FormControl(),
      reporter: new FormControl(),
      status: new FormControl()
    });
  }
}
