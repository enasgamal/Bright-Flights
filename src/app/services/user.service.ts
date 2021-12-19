import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  signupUsersUrl: string = "http://localhost:3000/signupUsers";
  loginUsersUrl: string = "http://localhost:3000/loginUsers";

  constructor(private http: HttpClient) { }

  getSignUpUsers() {
    return this.http.get(this.signupUsersUrl);
  }
  postSignUpUsers(user:any) {
    return this.http.post(this.signupUsersUrl, user);
  }

  getloginUsers() {
    return this.http.get(this.loginUsersUrl);
  }
  postloginUsers(user:any) {
    return this.http.post(this.loginUsersUrl, user);
  }


}
