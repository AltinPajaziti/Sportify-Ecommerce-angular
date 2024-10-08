import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/Services/authentication.service';
import type { LoginUser } from 'src/app/core/constants/Interfaces/LoginUser'; // Import `LoginUser` as a type
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private http: HttpClient
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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong username or password",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          this.router.navigate(['/login']);
          return;
        }

        // Store user details in localStorage
        localStorage.setItem('Username', response.username);
        localStorage.setItem('Token', response.token);
        localStorage.setItem('Role', response.role);

        // Navigate to home (or another desired route)
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Login error:', err);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Please check your credentials and try again.'
        });
        this.router.navigate(['/login']);
      }
    });
  }
}
