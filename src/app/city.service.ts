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
  ICity  
} from '../app/model/city';  

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
export class CityService {  
  constructor(private http: HttpClient) {}  
  // get all city data    
  getAllCity(url: string): Observable < ICity[] > {  
      return this.http.get < ICity[] > (url).pipe(catchError(this.handleError));  
  }  
  // insert new city details    
  addCity(url: string, city: ICity): Observable < any > {  
    return this.http.post(url, city, httpPostOptions).pipe(catchError(this.handleError));  
  }  
  // update city details    
  updateCity(url: string, id: number, city: ICity): Observable < any > {  
      const newurl = `${url}?id=${id}`;
      return this.http.put(newurl, city, httpPostOptions).pipe(catchError(this.handleError));  
  }  
  // delete city information    
  deleteCity(url: string, id: number): Observable < any > {  
    const newurl = `${url}?id=${id}`; // DELETE api/city?id=42    
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