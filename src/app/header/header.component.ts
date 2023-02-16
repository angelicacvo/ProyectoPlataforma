import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogged: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.isLogged = this.authService.isUserLoggedIn();
  }

   
  logout(): void {
    this.authService.logout();
    this.isLogged = false;
  }
}
