import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { HomeComponent } from './components/home/home.component';
import { TradeListComponent } from './components/trade-list/trade-list.component';
import { TradeDetailsComponent } from './components/trade-details/trade-details.component';
import { PsychometricTestComponent } from './components/psychometric-test/psychometric-test.component';
import { CareerExplorationComponent } from './components/career-exploration/career-exploration.component';
import { CourseTrackingComponent } from './components/course-tracking/course-tracking.component';
import { TrainingCentersComponent } from './components/training-centers/training-centers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginSignupComponent },
  // { path: 'home', loadComponent: ()=> import('./components/home/home.component').then(a=>a.HomeComponent)},

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'trades', component: TradeListComponent, canActivate: [AuthGuard] },
  {
    path: 'trade/:id',
    component: TradeDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'test',
    component: PsychometricTestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'career-exploration',
    component: CareerExplorationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'course-tracking',
    component: CourseTrackingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login-signup', component: LoginSignupComponent },
  {
    path: 'training-centers',
    component: TrainingCentersComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
