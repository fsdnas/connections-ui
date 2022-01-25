import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../models/jobs/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private _baseurl :string= 'http://localhost:8082/job-api/jobs';
  constructor(private _http:HttpClient) {}

  getAllJobs(){
    return this._http.get<Job[]>(this._baseurl);
  }

  
}
