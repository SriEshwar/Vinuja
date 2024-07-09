import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  deliveryDetails: any = null;
  items = this.cartService.getItems();

  constructor(private fb: FormBuilder, private cartService: CartService, private router: Router) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      landmark: ['']
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.deliveryDetails = this.checkoutForm.value;
    }
  }

  editDetails() {
    this.deliveryDetails = null;
  }

  continueToPayment() {
    console.log('Proceeding to payment with details:', this.deliveryDetails);
    // Logic to navigate to the payment page
    this.router.navigate(['/payment']);
  }

}
