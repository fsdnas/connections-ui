import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile/profile';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: Profile | undefined;
  isLoggedI: boolean;

  constructor(private _http: HttpClient, private _router: Router) {}

  private _baseurl: string = 'http://localhost:8081/profile-api/login';

  loginProfile = (email: string, password: string): Observable<Profile> => {
    let response = this._http.post<Profile>(`${this._baseurl}`, {
      email,
      password,
    });

    response.subscribe((data) => (this.user = data));

    return response;
  };

  loginUser = (email: string, password: string): Observable<Profile> => {
    return this._http.get<Profile>(
      `${this._baseurl}/email/${email}/password/${password}`
    );
  };

  isUserLoggedIn = () => {
    return of(this.user);
  };

  isLoggedIn = () => {
    return (this.isLoggedI = !this.isLoggedI);
  };

  logoutUser = () => {
    this.isLoggedI = false;
    this.user = undefined;
  };
}
