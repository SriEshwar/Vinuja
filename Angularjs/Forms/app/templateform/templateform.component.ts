import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: ''
  };

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    console.log('Form Data:', this.user);
  }
}
