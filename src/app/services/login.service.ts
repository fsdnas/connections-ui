import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn!:boolean;
  constructor() {}

  loginService(username: string, password: string) {
    if (username == 'admin' && password == 'admin') {
      this.isLoggedIn = true;
      console.log('login Success');
      return of(true);
    }
    return of(false);
  }
  isUserLoggedIn=()=>{
    return this.isLoggedIn;
  }
logoutUser=()=>{
  this.isLoggedIn=false;
}
}
