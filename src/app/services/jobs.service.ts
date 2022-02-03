import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../models/jobs/company';
import { Job } from '../models/jobs/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private _baseurl: string = 'http://localhost:8082/job-api/jobs';
  constructor(private _http: HttpClient) { }

  getAllJobs() {
    return this._http.get<Job[]>(this._baseurl);
  }

  getJobById(jobId: number) {
    return this._http.get<Job>(`${this._baseurl}/id/${jobId}`)
  }

  getCompany(company: string) {
    return this._http.get<Company[]>(`${this._baseurl}/company/${company}`)

  }

  getJobByEmploymenttype(employementtype: string) {
    return this._http.get<Job[]>(`${this._baseurl}/employmenttype/${employementtype}`)
  }

  getByCompanyName(name: string) {
    return this._http.get<Company>(`${this._baseurl}/companyName/${name}`)
  }
  



}
