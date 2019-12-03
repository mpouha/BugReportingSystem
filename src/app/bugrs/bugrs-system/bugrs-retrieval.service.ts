import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugrsRetrievalService {

  private endpointURL = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  getBugsList(sortBy: string): Observable<any> {
    const httpParams = new HttpParams() .set('sort',`${sortBy},asc`)
                                        .set('size','all');

    return this.http.get(this.endpointURL,{params: httpParams});
  }
}
