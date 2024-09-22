import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Remove `type`
import { AuthenticationService } from 'src/app/core/Services/authentication.service'; // Remove `type`
import { LoginUser } from 'src/app/core/constants/Interfaces/LoginUser'; // Keep this as type for `response`

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public auth: AuthenticationService,
    public router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    const { username, password } = this.form.value;

    this.auth.login(username, password).subscribe({
      next: (response: LoginUser) => {
        if (response.status !== 'ok') {
          this.router.navigate(['']);
          return;
        }

        localStorage.setItem('Username', response.username);
        localStorage.setItem('Token', response.token);
        localStorage.setItem('Role', response.role);

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.router.navigate(['']); 
      }
    });
  }
}
