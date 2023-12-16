import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '..//services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/tutorials']); // Redirect to your dashboard or home page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
