import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onLogin = (loginForm: NgForm) => {
    console.log(loginForm.value);
    let user = loginForm.value;
    // if (user.username == 'admin' && user.password == 'admin')
      this._router.navigate(['/admin']);
  };

}
