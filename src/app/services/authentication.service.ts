import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Global } from '../shared/Global';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../model/user';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<IUser> {
        return this.http.post<IUser>(Global.BASE_USER_ENDPOINT + `user/authenticate`, { username: username, password: password })
        .pipe(
            catchError(this.handleError)
          );
        //return this.http.post<any>(`${config.apiUrl}/user/authenticate`, { username: username, password: password })
        // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
            // .pipe(map(user => {
            //     // login successful if there's a jwt token in the response
            //     if (user && user.token) {
            //         // store user details and jwt token in local storage to keep user logged in between page refreshes
            //         localStorage.setItem('currentUser', JSON.stringify(user));
            //     }
            //     console.log('user returned:success');    
            //     return user;
            // }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

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

