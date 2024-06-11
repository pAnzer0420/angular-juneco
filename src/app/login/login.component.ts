import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Apiservice } from './services/api.service';
import { GlobalService } from '../global.service';

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
		private globalService: GlobalService,
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
			if (response !== null && response !== undefined) {
				this.globalService.user_id = response.toString();
				console.log('[client]: User ID: ' + this.globalService.user_id);
				this.router.navigate(['/todo']);
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
