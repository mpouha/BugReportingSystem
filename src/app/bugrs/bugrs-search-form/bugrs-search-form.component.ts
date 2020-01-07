import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BugrsRetrievalService } from '../bugrs-retrieval.service';
import { ListStruct } from '../list-struct';

@Component({
  selector: 'brs-bugrs-search-form',
  templateUrl: './bugrs-search-form.component.html',
  styleUrls: ['./bugrs-search-form.component.scss']
})
export class BugrsSearchFormComponent implements OnInit {

  @Output() messageEvent = new EventEmitter();

  searchForm: FormGroup;
  priority: string;
  reporter: string;
  status: string;
  title: string;

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

  search() {
    this.messageEvent.emit({
      title: this.searchForm.value.title,
      priority: this.searchForm.value.priority,
      reporter: this.searchForm.value.reporter,
      status: this.searchForm.value.status
    });
  }
}
