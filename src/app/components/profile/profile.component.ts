import { Component,inject } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem("loggedInUSer")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUSer")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUSer")!).email;
  signOut(){
    sessionStorage.removeItem("loggedInUSer");
    this.auth.signOut();
  }
}
