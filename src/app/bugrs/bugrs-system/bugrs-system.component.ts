import { Component, OnInit } from '@angular/core';
import { BugrsRetrievalService } from './bugrs-retrieval.service';
import { ListStruct } from './list-struct';

@Component({
  selector: 'brs-bugrs-system',
  templateUrl: './bugrs-system.component.html',
  styleUrls: ['./bugrs-system.component.scss']
})
export class BugrsSystemComponent implements OnInit {

  bugDataList: ListStruct[];

  constructor(private bugServiceRetrieval: BugrsRetrievalService ) { }

  ngOnInit() {
    this.fillBugList();
  }

  fillBugList() {
    this.bugServiceRetrieval.getBugsList().subscribe((response) => {
      this.bugDataList = response;
    });
  }
}
