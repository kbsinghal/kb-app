import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IState } from '../model/state';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
  })
};

const httpPostOptions = {  
  headers: new HttpHeaders({  
    'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
  })  
}; 

@Injectable()
export class StateService {
  constructor(private http: HttpClient) { }

  // get all state data
  getAllState(url: string): Observable<IState[]> {
    return this.http.get<IState[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new state details
  addState(url: string, state: IState): Observable<any> {
    return this.http.post(url, state, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update state details
  updateState(url: string, id: number, state: IState): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, state, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete state information
  deleteState(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/state?id=42
    return this.http.delete(newurl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // custom handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
