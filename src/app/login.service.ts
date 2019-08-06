import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class User{
  constructor(public status:string,) {}
}

export class requestUser {
  constructor(public username: string, password: string) {}
}

export class JwtResponse{
  constructor(public jwttoken:string,) {}
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username, password) : Observable<HttpResponse<Object>>{

    return this.http.post<HttpResponse<Object>>('http://localhost:8080/login',{username, password}, {observe: 'response'}).pipe(
         tap(resp => console.log('heaeder', resp.headers.keys()))
    );
  }

}
