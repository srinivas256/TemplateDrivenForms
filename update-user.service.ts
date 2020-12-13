import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
 url=  'https://jsonplaceholder.typicode.com/posts';
  constructor( private _http: HttpClient ) { }

  updateServer(user:User){
  return  this._http.post(this.url, user)
 .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error)
  }
}
