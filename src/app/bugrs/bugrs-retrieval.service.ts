import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListStruct } from './list-struct';
import { comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class BugrsRetrievalService {

  private endpointURL = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  getBugsList(): Observable<any> {
    const httpParams = new HttpParams() .set('sort', `title,desc`)
                                        .set('size', 'all');

    return this.http.get(this.endpointURL, {params: httpParams});
  }

  getBugsSortedList(sortBy: string, orderBy: string): Observable<any> {
    const httpParams = new HttpParams() .set('sort', `${sortBy},${orderBy}`)
                                        .set('size', 'all');

    return this.http.get(this.endpointURL, {params: httpParams});
  }

  getSearchResults(title: string, priority: string, reporter: string, status: string): Observable<any> {
    const httpParams = new HttpParams() .set('sort', 'title,desc')
                                        .set('size', 'all')
                                        .set('title', `${title}`)
                                        .set('priority', `${priority}`)
                                        .set('reporter', `${reporter}`)
                                        .set('status', `${status}`);
    console.log(this.http.get(this.endpointURL, {params: httpParams}));
    return this.http.get(this.endpointURL, {params: httpParams});
  }

  createBug(bug: ListStruct) {
    bug.createdAt = Date.now.toString();
    return this.http.post(this.endpointURL, bug);
  }

  getBug(id: string) {
    return this.http.get(`${this.endpointURL}/${id}`);
  }

  update(bug: any): Observable<any> {
   bug.updatedAt =  Date.now.toString();
   let result: Observable<any>;
   result = this.http.put(`${this.endpointURL}/${bug.id}`, bug);
   return result;
  }

  deleteBug(id: string, bug: ListStruct) {
    const httpParams = new HttpParams().set('id', id);
    httpParams.set('title', bug.title);
    httpParams.set('description', bug.description);
    httpParams.set('priority', bug.priority);
    httpParams.set('reporter', bug.reporter);
    const options = { params: httpParams };

    console.log(`${this.endpointURL}/${id}`);
    return this.http.delete(`${this.endpointURL}/${id}`, options);
  }
}
