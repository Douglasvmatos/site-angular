import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceLogin {

  constructor() { }

  login(username: string, password: string): boolean {
    const user = { username, password };
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}