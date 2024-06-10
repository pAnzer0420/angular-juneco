import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Apiservice } from './services/api.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	standalone: true,
	imports: [FormsModule, RouterLink, CommonModule],
})

export class RegisterComponent {
	constructor(private apiservice: Apiservice) {}

	username = '';
	password = '';
	confirmPassword = '';

	onRegister() {
			if (this.isPasswordMatch()) {
				var data: any = {
					username: this.username,
					password: this.password,
				};
				console.log(data);

				this.apiservice.register(data).subscribe((response) => {
					console.log(response);
				});
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
