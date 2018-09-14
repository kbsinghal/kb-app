import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEventArtist } from '../model/eventartist';

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
export class EventArtistService {
  constructor(private http: HttpClient) { }

  // get all eventartist data
  getAllEventArtist(url: string): Observable<IEventArtist[]> {
    return this.http.get<IEventArtist[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new eventartist details
  addEventArtist(url: string, eventartist: IEventArtist): Observable<any> {
    return this.http.post(url, eventartist, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update eventartist details
  updateEventArtist(url: string, id: number, eventartist: IEventArtist): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, eventartist, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete eventartist information
  deleteEventArtist(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/eventartist?id=42
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
