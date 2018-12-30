import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);

      console.log(`operation ${operation} failed : ${error.message} `);
      return of(result as T);
    }

  }

  apiUrl = 'api/users';
  constructor(private httpClient : HttpClient, private router: Router) { }

  signup(formData : NgForm){
    return this.httpClient.post<any>(`${this.apiUrl}/signup`, formData).pipe(
      tap(user => {
        console.log(user);

      }),
      catchError(this.handleError('My error', []))
    )
  }

  login(formData : NgForm){
    return this.httpClient.post<any>(`${this.apiUrl}/login`, formData).pipe(
      tap(user => {
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      }),
      catchError(this.handleError('My error', []))
    )
  }
  logout(){
    if(localStorage.getItem('currentUser')){
      localStorage.removeItem('currentUser');
      this.router.navigate(['/Login']);
    }
  }

  isLoggedIn(){
    if(localStorage.getItem('currentUser')){
      return true;
    } else {
      return false;
    }
  }

  getUser(){
    if (this.isLoggedIn) {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
