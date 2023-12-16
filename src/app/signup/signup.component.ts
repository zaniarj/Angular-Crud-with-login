import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '..//services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signUp(): void {
   
    if (this.username.trim() === '' || this.password.trim() === '') {
      alert('Please enter both username and password.');
      return;
    }

    const user = {
      username: this.username,
      password: this.password,
    };

    // Register user
    this.authService.register(user);

    // Redirect to login page after registration
    this.router.navigate(['/login']);
  }
}
