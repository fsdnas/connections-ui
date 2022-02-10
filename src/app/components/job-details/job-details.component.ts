import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/jobs/job';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

    
    constructor(public dialog: MatDialog,
      private _jobsService:JobsService,
      private _activatedRoute:ActivatedRoute,private _location:Location ) { }
  jobId!: number;
  job!:Job;
  // dialog!:string;
  employmentType!:string

  back=()=>{
    this._location.back();
  }
  
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map=>{
      
      let id= map.get("id");
      if(id) 
        this.jobId=parseInt(id);
    });
      this._jobsService.getJobById(this.jobId).subscribe(data=>this.job=data);
  }
  onApply = () => {
    this.dialog.open(Apply)
  };

}
@Component({
  selector: 'apply',
  templateUrl: 'apply.html',
})
export class Apply {}
