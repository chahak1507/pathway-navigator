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

const routes: Routes = [
  { path: '', component: LoginSignupComponent},
  // { path: 'home', loadComponent: ()=> import('./components/home/home.component').then(a=>a.HomeComponent)},

  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'trades', component: TradeListComponent },
  { path: 'trade/:id', component: TradeDetailsComponent },
  { path: 'test', component: PsychometricTestComponent },
  { path: 'career-exploration', component: CareerExplorationComponent },
  { path: 'course-tracking', component: CourseTrackingComponent },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'training-centers', component: TrainingCentersComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

