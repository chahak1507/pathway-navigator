import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TradeListComponent } from './components/trade-list/trade-list.component';
import { TradeDetailsComponent } from './components/trade-details/trade-details.component';
import { PsychometricTestComponent } from './components/psychometric-test/psychometric-test.component';
import { CareerExplorationComponent } from './components/career-exploration/career-exploration.component';
import { CourseTrackingComponent } from './components/course-tracking/course-tracking.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { TrainingCentersComponent } from './components/training-centers/training-centers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CareerDetailsComponent } from './career-details/career-details.component';
// import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TradeListComponent,
    TradeDetailsComponent,
    PsychometricTestComponent,
    CareerExplorationComponent,
    CourseTrackingComponent,
    LoginSignupComponent,
    TrainingCentersComponent,
    ProfileComponent,
    CourseDetailsComponent,
    CareerDetailsComponent,
    // NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
