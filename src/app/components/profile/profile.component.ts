import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  auth = inject(AuthService);
  loggedInUser = JSON.parse(localStorage.getItem('loggedInUSer')!);
  name = this.loggedInUser.name;
  userProfileImg = this.loggedInUser;
  email = this.loggedInUser.email;
  signOut() {
    localStorage.removeItem('loggedInUSer');
    this.auth.signOut();
  }
}
