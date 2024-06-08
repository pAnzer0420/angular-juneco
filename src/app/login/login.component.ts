import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, RouterLink],
})
export class LoginComponent {
  username = '';
  password = '';

  onLogin() {
    // Insert functionaliyt
    console.log('Login attempt');
  }

  forgotPassword() {
    // insert functionality
    console.log('Forgot password requested');
  }
}
