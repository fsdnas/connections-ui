import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';

import { Profile } from 'src/app/models/profile/profile';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardGuard implements CanActivate {
  user: Profile | undefined;

  constructor(private _router: Router, private _loginService: LoginService) {}

  canActivate(router: ActivatedRouteSnapshot): boolean {
    this._loginService.isUserLoggedIn().subscribe((data) => {
      if (!data) {
        this._router.navigate(['/login'],{queryParams:{returnUrl:router.url}});
        this.user = undefined;
        return;
      }
      this.user = data;
    });
    return !!this.user;
  }
}
