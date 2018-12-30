import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { Post } from './Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators'
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PostComponent } from './post/post.component';

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = configuration;
  apiUrl = 'api/posts';
  constructor(private httpClient : HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);

      console.log(`operation ${operation} failed : ${error.message} `);
      return of(result as T);
    };

  }

  getConfig(){
      return this.config;

  }
  getPosts(): Observable<Post[]>{
      return this.httpClient.get<any>(this.apiUrl).pipe(
        tap(post => {
           console.log(post);
        }),
        catchError(this.handleError('Error getting posts', []))
      );

  }
  getPostByID(id : number){
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(post => {
         console.log(post);
      }),
      catchError(this.handleError('Error getting posts by id', []))
    );

  }



  updatePost(formData: NgForm): Observable<Post>{
      return this.httpClient.put<any>(`${this.apiUrl}`, formData, httpOptions).pipe(
        tap(post => {
           console.log(post);
        }),
        catchError(this.handleError('Error updating posts', []))
      );
  }

  addPost(formData: NgForm): Observable<PostComponent>{
      return this.httpClient.post<any>(`${this.apiUrl}`, formData).pipe(
        tap(post => {
           console.log(post);
        }),
        catchError(this.handleError('Error Adding posts', []))
      );
  }

  getSettings(database: string, id?: string): Observable<any[]>{
      let uid= id || null;
      let url: string;
      if (uid !== null) {
        url = `api/${database}/${id}`;
      } else {
        url = `api/${database}`;
      }
      return this.httpClient.get<any>(url).pipe(
        tap(setting => {
           console.log(setting);
        }),
        catchError(this.handleError('Error getting settings', []))
      );

  }
}
