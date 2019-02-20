import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
//import 'rxjs/Rx';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { IState } from '../model/state';


@Injectable()
export class FileService {

    constructor(private http: Http) { }


    upload(file: any) {
        const input = new FormData();
        //let input = new FormData();
        input.append('filesData', file);
      return this.http.post('http://localhost:4200/kbapi/files/filesList', input)
        .map(res => res.json());

        //.pipe(map((response: any) => response.json()));
    }
}
