import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Finest';

  constructor(public authService: AuthService, private router: Router) {}
  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
