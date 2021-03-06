import {  
  Injectable  
} from '@angular/core';  
import {  
  HttpClient,  
  HttpParams,  
  HttpErrorResponse  
} from '@angular/common/http';  
import {  
  HttpHeaders  
} from '@angular/common/http';  
import {  
  Observable,  
  throwError  
} from 'rxjs';  
import {  
  catchError  
} from 'rxjs/operators';  
import {  
  IEvent  
} from '../app/model/event';  

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
export class EventService {  
  constructor(private http: HttpClient) {}  
  // get all event data    
  getAllEvent(url: string): Observable < IEvent[] > {  
      return this.http.get < IEvent[] > (url).pipe(catchError(this.handleError));  
  }  
  // insert new event details    
  addEvent(url: string, event: IEvent): Observable < any > {  
    return this.http.post(url, event, httpPostOptions).pipe(catchError(this.handleError));  
  }  
  // update event details    
  updateEvent(url: string, id: number, event: IEvent): Observable < any > {  
      const newurl = `${url}?id=${id}`;
      return this.http.put(newurl, event, httpPostOptions).pipe(catchError(this.handleError));  
  }  
  // delete event information    
  deleteEvent(url: string, id: number): Observable < any > {  
    const newurl = `${url}?id=${id}`; // DELETE api/event?id=42    
      return this.http.delete(newurl, httpOptions).pipe(catchError(this.handleError));  
  }  
  // custom handler    
  private handleError(error: HttpErrorResponse) {  
      if (error.error instanceof ErrorEvent) {  
          // A client-side or network error occurred. Handle it accordingly.    
          console.error('An error occurred:', error.error.message);  
      } else {  
          // the backend returned an unsuccessful response code.    
          // the response body may contain clues as to what went wrong,    
          console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);  
      }  
      // return an observable with a user-facing error message    
      return throwError('Something bad happened; please try again later.');  
  }  
} 