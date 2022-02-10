import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { FeedComponent } from './components/feed/feed.component';
import { HomeComponent } from './components/home/home.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginGuardGuard } from './components/login/login-guard.guard';
import { LoginComponent } from './components/login/login.component';
import { MyNetworkComponent } from './components/my-network/my-network.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: JobsComponent, canActivate: [LoginGuardGuard] },
  {
    path: 'job-details/:id',
    component: JobDetailsComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'company/:companyName',
    component: CompanyComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'network',
    component: MyNetworkComponent,
    canActivate: [LoginGuardGuard],
  },
  { path: 'feed', component: FeedComponent, canActivate: [LoginGuardGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
