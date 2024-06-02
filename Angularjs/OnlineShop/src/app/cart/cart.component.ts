
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent implements OnInit {
//   items = this.cartService.getItems();

//   constructor(private cartService: CartService) {}

//   ngOnInit() {
//     // Initialization logic here
//   }

//   clearCart() {
//     this.items = this.cartService.clearCart();
//   }

//   removeItem(name: string, size: number) {
//     this.cartService.removeItem(name, size);
//     this.items = this.cartService.getItems();
//   }

//   updateQuantity(name: string, size: number, quantity: number) {
//     if (quantity > 0) {
//       this.cartService.updateQuantity(name, size, quantity);
//     } else {
//       this.removeItem(name, size);
//     }
//     this.items = this.cartService.getItems();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Initialization logic here
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  removeItem(name: string, size: number) {
    this.cartService.removeItem(name, size);
    this.items = this.cartService.getItems();
  }

  updateQuantity(name: string, size: number, quantity: number) {
    if (quantity > 0) {
      this.cartService.updateQuantity(name, size, quantity);
    } else {
      this.removeItem(name, size);
    }
    this.items = this.cartService.getItems();
  }

  getTotalAmount() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  placeOrder() {
    // Logic for placing the order
    console.log('Order placed:', this.items);
  }
}
