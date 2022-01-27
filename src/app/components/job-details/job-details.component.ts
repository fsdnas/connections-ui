import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/jobs/job';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  constructor(private _jobsService:JobsService, private _activatedRoute:ActivatedRoute) { }
  jobId!: number;
  job!:Job;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map=>{
      let id= map.get("id");
      if(id) 
        this.jobId=parseInt(id);
    });
    
      this._jobsService.getJobById(this.jobId).subscribe(data=>this.job=data);
  }

}
