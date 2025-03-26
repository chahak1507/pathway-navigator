declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  private router = inject(Router);
  heading = 'Login / Signup';
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '199784184944-a7pmf8afhda4ge955t9udocmn2d37cgi.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp),
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled-blue',
      size: 'large',
      shape: 'rectangle',
      // width : 350
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    if (response) {
      const payLoad = this.decodeToken(response.credential);
      localStorage.setItem('loggedInUSer', JSON.stringify(payLoad));
      this.router.navigate(['profile']);
      this.addUser({
        name: payLoad.name,
        email: payLoad.email,
        picture: payLoad.picture,
      });
    }
  }

  async addUser(user: { name: string; email: string; picture: string }) {
    try {
      const response = await fetch(
        'https://pathway-navigator-backend.onrender.com/api/user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
