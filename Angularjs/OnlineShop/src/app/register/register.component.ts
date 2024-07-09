import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule,CommonModule,RouterLink,RouterOutlet,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService:AuthService,
    private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])/)
      ]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
  //   this.submitted = true;

  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   alert('Registration successful');
   
  // }



  this.submitted = true;

  const { username, email, password } = this.registerForm.value;

  this.authService.register(username, email, password).subscribe({
    next: () => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    },
    error: (err) => {
      alert('Registration failed: ' + err.error.message);
    }
  });

  
}
}
