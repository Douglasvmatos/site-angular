import { Component } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(headerService: HeaderService) {
    headerService.headerData = {
      title: 'About',
      routeUrl: '/about'
    }
  }
}
