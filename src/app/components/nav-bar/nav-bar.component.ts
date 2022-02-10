import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isloggedIn: boolean = this._loginService.isLoggedIn();

  constructor(private _loginService: LoginService, private _router: Router) {}

  ngOnInit(): void {}

  loginModule = () => {};

  LogOut = () => {
    localStorage.clear();
    this._loginService.logoutUser();
    this._router.navigate(['']);
  };
}
