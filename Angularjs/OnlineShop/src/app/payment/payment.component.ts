import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentForm: FormGroup;
  selectedPaymentMethod: string = 'credit';
  items = this.cartService.getItems();
  totalAmount: number = this.items.reduce((total, item) => total + item.price * item.quantity, 0);

  constructor(private fb: FormBuilder, private cartService: CartService, private router: Router) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      validThru: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]],
      upiId: ['', Validators.required]
    });
  }

  onPaymentMethodChange(method: string) {
    this.selectedPaymentMethod = method;
  }

  // onSubmit() {
  //   if (this.selectedPaymentMethod === 'credit' && this.paymentForm.valid) {
  //     alert('Order successfully placed using Credit/Debit/ATM Card');
  //     // Proceed with order placement logic
  //   } else if (this.selectedPaymentMethod === 'upi') {
  //     alert('Order successfully placed using UPI');
  //     // Proceed with order placement logic
  //   } else if (this.selectedPaymentMethod === 'cod') {
  //     alert('Order successfully placed with Cash on Delivery');
  //     // Proceed with order placement logic
  //   }
  //   this.router.navigate(['/ordersuccess']);
  
     
      
  // }



  onSubmit() {
    if (this.selectedPaymentMethod === 'credit' && this.paymentForm.valid) {
      this.placeOrder('Credit/Debit/ATM Card');
    } else if (this.selectedPaymentMethod === 'upi') {
      this.placeOrder('UPI');
    } else if (this.selectedPaymentMethod === 'cod') {
      this.placeOrder('Cash on Delivery');
    }
  }

  placeOrder(paymentMethod: string) {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);

    const orderDetails = {
      items: this.items,
      totalAmount: this.totalAmount,
      paymentMethod: paymentMethod,
      deliveryDate: deliveryDate,
      orderDate: new Date()
    };

    this.cartService.setOrderDetails(orderDetails);
    this.router.navigate(['/ordersuccess']);
  }
}
