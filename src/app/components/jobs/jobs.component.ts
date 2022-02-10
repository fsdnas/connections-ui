import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/jobs/company';
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
  search = ''
  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
  //   window.location.host
  // );
  show1: boolean = false
  show2: boolean = false
  show3: boolean = false
  show4: boolean = false


  emptyp!: string

  jobsList!: Job[];
  job!: Job;
  company!: Company;
  type!: { full: "FULLTIME", part: "PARTTIME" }

  constructor(private _jobsService: JobsService, private _router: Router) { }

  ngOnInit(): void {
    this._jobsService.getAllJobs().subscribe({
      next: data => {
        this.jobsList = data;
      },
      error: error => console.log(error),
      complete: () => console.log("completed")
    })
  }
  onSubmit = (job: Job) => {
    console.log(job)
    this._router.navigate(['job-details', job.jobId]);
  }

  onCompany = (company: Company) => {
    // console.log(company)
    this._router.navigate(['company', company.companyName])
  }

  toggleFilterType = () => {
    this.show1 = !this.show1
  }

  toggleFilterLocation = () => {
    this.show2 = !this.show2
  }
  toggleFilterCompany = () => {
    this.show3 = !this.show3
  }
  toggleFilterExperience = () => {
    this.show4 = !this.show4
  }
  onEmploymentPartTimeType = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.employmentType.toLowerCase() === "parttime"
      )
    })
  }
  onEmploymentFullTimeType = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.employmentType.toLowerCase() === "fulltime"
      )
    })
  }
  onLocationBangalore = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.location.toLowerCase() === "bangalore"
      )
    })
  }
  onLocationHyderabad = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.location.toLowerCase() === "hyderabad"
      )
    })
  }
  onLocationPune = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.location.toLowerCase() === "pune"
      )
    })
  }
  onLocationKolkata = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.location.toLowerCase() === "kolkata"
      )
    })
  }
  onCompanytcs = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.company.companyName.toLowerCase() === "tcs"
      )
    })
  }
  onCompanywipro = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.company.companyName.toLowerCase() === "wipro"
      )
    })
  } onCompanymyntra = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.company.companyName.toLowerCase() === "myntra"
      )
    })
  } onCompanyamazon = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.company.companyName.toLowerCase() === "amazon"
      )
    })
  }
  onCompanyjio = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.company.companyName.toLowerCase() === "jio"
      )
    })
  }
  onCompanygoogle = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.company.companyName.toLowerCase() === "google"
      )
    })
  }
  onExperience2 = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.jobDetails.experience<="2"
      )
    })
  }
  onExperience3 = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.jobDetails.experience=="3"
      )
    })
  }
  onExperience4 = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.jobDetails.experience=="4"
      )
    })
  }
  onExperience5 = () => {
    this._jobsService.getAllJobs().subscribe(data => {
      this.jobsList = data.filter(t => t.jobDetails.experience>="5"
      )
    })
  }





}