import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListStruct } from './list-struct';

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

  createBug(bug: ListStruct) {
    bug.createdAt = Date.now.toString();
    return this.http.post(this.endpointURL, bug);
  }

  getBug(id: string) {
    return this.http.get(`${this.endpointURL}/${id}`);
  }

  updateBug(bug: ListStruct, id: string) {
    bug.updatedAt =  Date.now.toString();

    return this.http.put(`${this.endpointURL}/${id}`, bug);
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
