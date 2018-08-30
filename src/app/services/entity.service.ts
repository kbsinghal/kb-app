import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEntity } from '../model/entity';

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
export class EntityService {
  constructor(private http: HttpClient) { }

  // get all entity data
  getAllEntity(url: string): Observable<IEntity[]> {
    return this.http.get<IEntity[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // insert new entity details
  addEntity(url: string, entity: IEntity): Observable<any> {
    return this.http.post(url, entity, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // update entity details
  updateEntity(url: string, id: number, entity: IEntity): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, entity, httpPostOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // delete entity information
  deleteEntity(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/entity?id=42
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
