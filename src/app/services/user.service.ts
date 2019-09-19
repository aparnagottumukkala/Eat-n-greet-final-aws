import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserLogin } from 'src/models/user-login';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(loginObj: UserLogin) {
    const body = new FormData();
    body.set('username', loginObj.username);
    body.set('password', loginObj.password);
    return this.http.post(`eatngreet/user/login`, body);
  }
}
