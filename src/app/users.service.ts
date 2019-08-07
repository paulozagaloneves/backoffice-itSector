import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './config/app-settings';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(AppSettings.API_ENDPOINT + '/api/v1/user');
  }

  createUser(user){
    return this.http.post(AppSettings.API_ENDPOINT + '/api/v1/user', user);
  }

  deleteUser(user){
    return this.http.delete(AppSettings.API_ENDPOINT + '/api/v1/user/'+ user);
  }

  getUser(id){
    return this.http.get(AppSettings.API_ENDPOINT + '/api/v1/user/' + id);
  }

  editUser(user, id){
    return this.http.put(AppSettings.API_ENDPOINT + '/api/v1/user/' + id , user);
  }
}
