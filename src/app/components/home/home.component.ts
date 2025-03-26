import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  auth = inject(AuthService);
  // name = JSON.parse(sessionStorage.getItem("loggedInUSer")!).name;
  // userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUSer")!).picture;
  signOut() {
    localStorage.removeItem('loggedInUSer');
    this.auth.signOut();
  }
}
