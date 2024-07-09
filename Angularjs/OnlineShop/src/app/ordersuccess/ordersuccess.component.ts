import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ordersuccess',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ordersuccess.component.html',
  styleUrl: './ordersuccess.component.css'
})
export class OrdersuccessComponent {
  orderDetails: any;

  constructor(private cartService: CartService, private router: Router) {
    this.orderDetails = this.cartService.getOrderDetails();
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
