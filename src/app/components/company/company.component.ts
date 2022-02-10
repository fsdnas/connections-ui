import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/jobs/company';
import { Job } from 'src/app/models/jobs/job';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  constructor(public dialog: MatDialog,
    private _jobsService: JobsService,
    private _activatedRoute: ActivatedRoute,private _location:Location) { }

  jobId!: number;
  company!: Company;

  back=()=>{
    this._location.back();
  }
  
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map => {
      let cName = map.get("companyName");
      this._jobsService.getByCompanyName(cName!).subscribe({
        next: (data) => {
          console.log(data);
          this.company = data;
        }
      }
      );
    });
  }

}
