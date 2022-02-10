import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ProfileService } from 'src/app/services/profile.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  openT: String[] = ['OPENTOWORK', 'HIRING', 'PROVIDINGSERVICES'];

  experiences = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  qualifications = ['B.Tech', 'M.Tech', 'MCA', 'MBA', 'B.E', 'B.Com', 'B.Sc'];

  //for skill chips

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  certifications: String[] = [];

  skills: String[] = [];

  addSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.skills.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeSkill(skill: String): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  addCertification(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.certifications.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeCertification(certification: String): void {
    const index = this.certifications.indexOf(certification);

    if (index >= 0) {
      this.certifications.splice(index, 1);
    }
  }

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _profileService: ProfileService,
    private _loginService: LoginService,
    private _activatedRoute: ActivatedRoute
  ) {}
  myForm: FormGroup;
  hide = true;

  /* Reactive form */
  reactiveForm() {
    this.myForm = this._fb.group({
      name: [''],
      email: [''],
      password: [''],
      bio: [''],
      profileImage: [''],
      profileDetails: this._fb.group({
        openTo: [''],
        qualification: [''],
        experience: [''],
        skills: [this.skills],
        certifications: [this.certifications],
      }),
    });
  }

  submitForm() {
    console.log(this.myForm.value);
    this._profileService.addProfile(this.myForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('profile added');
      },
    });
    this._router.navigate(['/login']);
    window.location.reload();
  }

  onLogin = (loginForm: NgForm) => {
    let user = loginForm.value;
    this._loginService
      .loginProfile(loginForm.value.email, loginForm.value.password)
      .subscribe({
        next: (data) => {
          localStorage.setItem('profile', JSON.stringify(data));
          console.log(JSON.parse(localStorage.getItem('profile')));
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('added data to local storage');
        },
      });

    this._router.navigate(['/profile']);
  };

  ngOnInit(): void {
    this.reactiveForm();
  }
}
