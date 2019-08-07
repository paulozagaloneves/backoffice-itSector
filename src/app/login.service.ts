import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppSettings } from './config/app-settings';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: string;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = localStorage.getItem('currentUser');
  }
  
  public get currentUserValue(): String {
    return this.currentUserSubject;
  }

  login(username, password) : Observable<HttpResponse<Object>>{

    return this.http.post<HttpResponse<Object>>(AppSettings.API_ENDPOINT + '/login',{username, password}, {observe: 'response'}).pipe(
         tap(resp => {
           var token = resp.headers.get('authorization');
           localStorage.setItem('currentUser', token);
           this.currentUserSubject = token;
         }, (error) => {
          alert(error.error.message);
         })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject = null;
  }

}
