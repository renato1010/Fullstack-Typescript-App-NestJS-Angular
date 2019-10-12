import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() email: string;
  @Input() password: string;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login({
      email: this.email,
      password: this.password,
    });
  }
}
