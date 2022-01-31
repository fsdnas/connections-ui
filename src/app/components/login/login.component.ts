import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // returnUrl!: string;
  constructor() // private _loginService: LoginService, // private _router: Router,
  // private _activatedRoute: ActivatedRoute
  {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // onLogin = (loginForm: NgForm) => {
  //   console.log(loginForm.value);
  //   let user = loginForm.value;
  //   if (user.username == 'admin' && user.password == 'admin') {
  //     console.log('login success');
  //     this._router.navigate(['/feed']);
  //   }
  // };
}
