declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit{
  private router = inject(Router);
  heading = 'Login / Signup';
  ngOnInit(): void {
      google.accounts.id.initialize({
        client_id: '199784184944-a7pmf8afhda4ge955t9udocmn2d37cgi.apps.googleusercontent.com',
        callback: (resp: any)=>this.handleLogin(resp)
      });
      google.accounts.id.renderButton(document.getElementById("google-btn"),{
        theme: "filled-blue",
        size: "large",
        shape: "rectangle",
        // width : 350
      });
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split(".")[1]));
  }


  handleLogin(response:any){
    if(response){
      const payLoad = this.decodeToken(response.credential);
      sessionStorage.setItem("loggedInUSer",JSON.stringify(payLoad));
      // this.heading = 'Profile';
      console.log(response);
      this.router.navigate(['profile']);

    }
  }
}
