import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../model/user';

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
export class UserService {
  constructor(private http: HttpClient) { }

  // get all state data
  getAllUser(url: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new user details
  addUser(url: string, user: IUser): Observable<any> {
    return this.http.post(url, user, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update user details
  updateUser(url: string, id: number, user: IUser): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, user, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete user information
  deleteUser(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/user?id=42
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
