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
  IEventBanner  
} from '../app/model/eventbanner';  

const httpOptions = {  
  headers: new HttpHeaders({  
    'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
  })  
};  

const httpPostOptions = {  

  headers: new HttpHeaders({  
    //'Content-Type': 'application/json; charset=utf-8',
     'Accept': 'application/json',
     'Content-Type': 'multipart/form-data',
  })  
};  

@Injectable()  
export class EventBannerService {  
  constructor(private http: HttpClient) {}  
  // get all eventartist data    
  getAllEventBanner(url: string): Observable < IEventBanner[] > {  
      return this.http.get < IEventBanner[] > (url).pipe(catchError(this.handleError));  
  }  
  // insert new eventbanner details    
  //addEventBanner(url: string, formData: FormData): Observable < any > {  
//  addEventBanner(url: string, eventbanner: IEventBanner): Observable < any > {  
    addEventBanner(url: string, id: number, files: any): Observable < any > {  
    //const newurl = `${url}?id=${id}`; // KB ADDED
    //return this.http.post(newurl, files, httpPostOptions).pipe(catchError(this.handleError));  
    //return this.http.post(url, eventbanner, httpPostOptions).pipe(catchError(this.handleError));  
    return this.http.post(url, files, httpPostOptions).pipe(catchError(this.handleError));  
  }  
  // update eventbanner details    
  // updateEventBanner(url: string, id: number, eventbanner: IEventBanner): Observable < any > {  
  //     const newurl = `${url}?id=${id}`;
  //     return this.http.put(newurl, eventbanner, httpPostOptions).pipe(catchError(this.handleError));  
  // }  
  // // delete eventbanner information    
  // deleteEventBanner(url: string, id: number): Observable < any > {  
  //   const newurl = `${url}?id=${id}`; // DELETE api/eventbanner?id=42    
  //     return this.http.delete(newurl, httpOptions).pipe(catchError(this.handleError));  
  // }  
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