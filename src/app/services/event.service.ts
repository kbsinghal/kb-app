import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IEvent } from '../model/event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
    //'Access-Control-Allow-Origin':'*',
      //'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
      //'Authorization':'Basic a2FseWFhbmJoYXYgOiBNMHJwaCF1cw=='
      //'auth-token':'C3PO R2D2'
  })
};

const httpPostOptions = {  
  //withCredentials: true,
  
  headers: new HttpHeaders({  
    //'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Basic ' + btoa('kalyaanbhav : M0rph!us'),
      'Accept': 'application/json',
      'dataType': 'json'
      //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT, OPTIONS',
      //'Access-Control-Allow-Origin': 'http://localhost:5000',
      //'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
      //'Access-Control-Allow-Origin': '*'
      //'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
      //'Authorization': 'Basic a2FseWFhbmJoYXYgOiBNMHJwaCF1cw=='
      //'auth-token':'C3PO R2D2'
  })  
}; 

@Injectable()
export class EventService {
  constructor(private http: HttpClient) { }

  // get all event data
  //events(url: string): Observable<IEvent[]> {
  getAllEvent(url: string): Observable<IEvent[]> {
    console.log(url);
    return this.http.get<IEvent[]>(url)
      .pipe(
        catchError(this.handleError)
      );
      
  }

  // insert new event details
  addEvent(url: string, event: IEvent): Observable<any> {
    //return this.http.post(url, event, httpPostOptions)
    return this.http.post(url, JSON.stringify(event), httpPostOptions)
    //return this.http.post(url, JSON.stringify(event), httpOptions)
    //return this.http.post(url, event, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update event details
  updateEvent(url: string, id: number, event: IEvent): Observable<any> {
    const newurl = '${url}?id=${id}';
    return this.http.put(newurl, event, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete event information
  deleteEvent(url: string, id: number): Observable<any> {
    const newurl = '${url}?id=${id}'; // DELETE api/event?id=42
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
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
