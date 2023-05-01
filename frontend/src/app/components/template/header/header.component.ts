import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

valorLocalStorage = false;

constructor(
  private headerService: HeaderService,
  private router: Router){
  
}

userLogged(): boolean {
  return !!localStorage.getItem('currentUser');
  
}

noUserLogged(): boolean {
  return localStorage.length === 0;
}

signout(): void {
  localStorage.clear();
  location.reload();
}


get title(): string{
  return this.headerService.headerData.title
}

get routeUrl(): string{
  return this.headerService.headerData.routeUrl
}

}
