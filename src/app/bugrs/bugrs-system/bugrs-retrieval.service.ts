import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugrsRetrievalService {

  private endpointURL = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  getBugsList(): Observable<any> {
    return this.http.get(this.endpointURL);
  }
}
