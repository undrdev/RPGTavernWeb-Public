import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MonsterResult } from '../models/models';
import { inject } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MonsterService {
  baseUrl = 'https://api.open5e.com/monsters/';

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Search(cr?: string, type?: string, ac?: string){
    var searchStrings:string[] = [];
    if(cr.length>0){
      searchStrings.push('challenge_rating='+cr);
    }
    if(type.length>0){
      searchStrings.push('type='+type);
    }
    if(ac!==undefined && ac != null){
      searchStrings.push('armor_class='+ac);
    }
    var search: string = '?' + searchStrings.join('&');
    return this.http.get<MonsterResult>(this.baseUrl+search)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
