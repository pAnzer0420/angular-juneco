import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Apiservice } from './services/api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	standalone: true,
	imports: [FormsModule, RouterLink],
})
export class LoginComponent {
	constructor(
		private apiservice: Apiservice,
		private router: Router
	) {}

	username = '';
	password = '';

	onLogin() {
		var data: any = {
			username: this.username,
			password: this.password,
		};

		console.log(data);

		this.apiservice.login(data).subscribe((response) => {
			console.log(response);
			if (response === 1) {
				this.router.navigate(['/todo'])
				console.log('Redirecting to /todo');
			}
		});

		console.log('Login attempt');
	}

	forgotPassword() {
		// insert functionality
		console.log('Forgot password requested');
	}
}
