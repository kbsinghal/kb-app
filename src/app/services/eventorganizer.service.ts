import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEventOrganizer } from '../model/eventorganizer';

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
export class EventOrganizerService {
  constructor(private http: HttpClient) { }

  // get all EventOrganizer data
  getAllEventOrganizer(url: string): Observable<IEventOrganizer[]> {
    return this.http.get<IEventOrganizer[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new EventOrganizer details
  addEventOrganizer(url: string, eventorganizer: IEventOrganizer): Observable<any> {
    return this.http.post(url, eventorganizer, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update EventOrganizer details
  updateEventOrganizer(url: string, id: number, eventOrganizer: IEventOrganizer): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, eventOrganizer, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete EventOrganizer information
  deleteEventOrganizer(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/eventorganizer?id=42
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
