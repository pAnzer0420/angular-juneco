import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';

  onRegister() {
    if (this.isPasswordMatch()) {
      // funtioanlity for register
      console.log('Register attempt');
    } else {
      console.log('Passwords do not match');
    }
  }

  isPasswordMatch(): boolean {
    // for confirm pass
    return this.password === this.confirmPassword && this.password.length > 0;
  }
}
