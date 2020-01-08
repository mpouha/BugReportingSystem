import { Component, OnInit } from '@angular/core';
import { ListStruct } from '../list-struct';
import { Router } from '@angular/router';
import { BugrsRetrievalService } from '../bugrs-retrieval.service';

@Component({
  selector: 'brs-bugrs-system',
  templateUrl: './bugrs-system.component.html',
  styleUrls: ['./bugrs-system.component.scss']
})
export class BugrsSystemComponent implements OnInit {

  bugDataList: ListStruct[];
  numberOfTitleOrdering: number;
  numberOfPriorityOrdering: number;
  numberOfReporterOrdering: number;
  numberOfDateOrdering: number;
  numberOfStatusOrdering: number;
  p = 1;

  defineOrdering(numberOfTitleOrdering: number,
                 numberOfPriorityOrdering: number,
                 numberOfReporterOrdering: number,
                 numberOfDateOrdering: number,
                 numberOfStatusOrdering: number)
  {
    this.numberOfTitleOrdering = numberOfTitleOrdering;
    this.numberOfPriorityOrdering = numberOfPriorityOrdering;
    this.numberOfReporterOrdering = numberOfReporterOrdering;
    this.numberOfDateOrdering = numberOfDateOrdering;
    this.numberOfStatusOrdering = numberOfStatusOrdering;
  }

  constructor(private bugServiceRetrieval: BugrsRetrievalService, private router: Router) { }

  ngOnInit() {
    this.defineOrdering(0, 0, 0, 0, 0);
    this.fillBugList();
  }

  fillBugList() {
    this.bugServiceRetrieval.getBugsList().subscribe((response) => {
      this.bugDataList = response;
    });
  }

  sortListByTitle() {
    let orderingBy: string;
    if (this.numberOfTitleOrdering === 0) {
      orderingBy = 'asc';
      this.defineOrdering(1, 0, 0, 0, 0);
    } else {
      orderingBy = 'desc';
      this.defineOrdering(0, 0, 0, 0, 0);
    }
    this.bugServiceRetrieval.getBugsSortedList('title', orderingBy).subscribe((response) => {
      this.bugDataList = response;
    });
  }

  sortListByPriority() {
    let orderingBy: string;
    if (this.numberOfPriorityOrdering === 0) {
      orderingBy = 'asc';
      this.defineOrdering(0, 1, 0, 0, 0);
    } else {
      orderingBy = 'desc';
      this.defineOrdering(0, 0, 0, 0, 0);
    }
    this.bugServiceRetrieval.getBugsSortedList('priority', orderingBy).subscribe((response) => {
      this.bugDataList = response;
    });
  }

  sortListByReporter() {
    let orderingBy: string;
    if (this.numberOfReporterOrdering === 0) {
      orderingBy = 'asc';
      this.defineOrdering(0, 0, 1, 0, 0);
    } else {
      orderingBy = 'desc';
      this.defineOrdering(0, 0, 0, 0, 0);
    }
    this.bugServiceRetrieval.getBugsSortedList('reporter', orderingBy).subscribe((response) => {
      this.bugDataList = response;
    });
  }

  sortListByDate() {
    let orderingBy: string;
    if (this.numberOfDateOrdering === 0) {
      orderingBy = 'asc';
      this.defineOrdering(0, 0, 0, 1, 0);
    } else {
      orderingBy = 'desc';
      this.defineOrdering(0, 0, 0, 0, 0);
    }
    this.bugServiceRetrieval.getBugsSortedList('createdAt', orderingBy).subscribe((response) => {
      this.bugDataList = response;
    });
  }

  sortListByStatus() {
    let orderingBy: string;
    if (this.numberOfStatusOrdering === 0) {
      orderingBy = 'asc';
      this.defineOrdering(0, 0, 0, 0, 1);
    } else {
      orderingBy = 'desc';
      this.defineOrdering(0, 0, 0, 0, 0);
    }
    this.bugServiceRetrieval.getBugsSortedList('status', orderingBy).subscribe((response) => {
      this.bugDataList = response;
    });
  }

  AddBugNavigation() {
    this.router.navigate(['submitbug', '']);
  }

  EditBugNavigation(bugId: string) {
    this.router.navigate(['submitbug', bugId]);
  }

  deleteBug(bugId: string, bug: ListStruct){

    this.bugServiceRetrieval.deleteBug(bugId, bug).subscribe(response => {
      if(response === true) {
          this.bugDataList = [];
          this.fillBugList();
        }
      });
  }

  receiveMessage($event) {
    this.bugServiceRetrieval.getSearchResults($event.title,$event.priority,$event.reporter,$event.status).subscribe( (response) => {
      this.bugDataList = response;
      console.log($event.title,$event.priority,$event.reporter,$event.status,this.bugDataList);
    });
  }
}
