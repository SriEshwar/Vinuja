import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // loginForm: FormGroup;
  // submitted = false;

  // constructor(private formBuilder: FormBuilder) {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', [Validators.required, Validators.minLength(8)]],
  //     password: ['', [Validators.required, Validators.minLength(8)]]
  //   });
  // }

  // get f() { return this.loginForm.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   alert('Login successful');
  // }



  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
