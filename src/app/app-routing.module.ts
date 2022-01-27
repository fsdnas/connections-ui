import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { FeedComponent } from './components/feed/feed.component';
import { HomeComponent } from './components/home/home.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MyNetworkComponent } from './components/my-network/my-network.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'job-details/:id', component: JobDetailsComponent },
  { path: 'jobs/company', component: CompanyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'network', component: MyNetworkComponent},
  { path: 'feed', component: FeedComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
