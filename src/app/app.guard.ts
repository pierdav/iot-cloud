import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

export function authenticated(): boolean {
  return !!localStorage.getItem('token');
}

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (authenticated()) { return true; }

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}