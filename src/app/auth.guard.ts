import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('loggedInUSer');
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
