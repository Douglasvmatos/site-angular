import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceLogin } from 'src/app/services/authorizationlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';


  constructor(private authService: AuthServiceLogin,
    private router: Router,
    private storage: LocalStorageService) { }

  ngOnInit() {
    const myValue = localStorage.getItem('username');
    if (myValue) {
      this.username = myValue
    }
  }

  userLogged(): boolean {
    return !!localStorage.getItem('currentUser');
    
  }

  signout(): void {
    localStorage.clear();
    location.reload();
    this.router.navigate(['/home']);
  }

  noUserLogged(): boolean {
    return localStorage.length === 0;
  }  
  

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      console.log('User successfully');
      this.router.navigate(['/products']);
    } else {
      console.log('Failed to login');
    }
  }
}