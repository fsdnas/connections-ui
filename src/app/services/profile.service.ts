import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _baseurl: string = 'http://localhost:8081/profile-api/profiles';
  
  constructor(private http: HttpClient) {}

  getAllProfiles = (): Observable<Profile[]> => {
    return this.http.get<Profile[]>(this._baseurl);
  };

  getByProfileId = (profileId: number): Observable<Profile> => {
    return this.http.get<Profile>(this._baseurl + '/id/' + profileId);
  };

  addProfile=(profile: Profile): Observable<Profile> => {
    return this.http.post<Profile>(this._baseurl, profile);
  }
}
