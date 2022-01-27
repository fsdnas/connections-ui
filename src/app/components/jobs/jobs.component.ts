import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/jobs/job';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  // events: string[] = [];
  // opened!: boolean;
   search=''
  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
  //   window.location.host
  // );

  jobsList!: Job[];
  job:Job[]|undefined;


  

  constructor( private _jobsService:JobsService,private _router:Router) { }

  ngOnInit(): void {
    this._jobsService.getAllJobs().subscribe({
      next: data => {
          this.jobsList = data;
      },
      error: error => console.log(error),
      complete:() => console.log("completed")
    })
  }
  onSubmit=(job:Job)=>{
    console.log(job)
    this._router.navigate(['job-details',job.jobId]);
  }

}