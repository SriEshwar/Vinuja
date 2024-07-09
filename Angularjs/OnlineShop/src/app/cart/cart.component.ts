
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { CommonModule } from '@angular/common';
// import { Router} from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   items = this.cartService.getItems();

//   constructor(private cartService: CartService,
//     private router:Router,
//     private authService: AuthService
//   ) {}

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

//   getTotalAmount() {
//     return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
//   }

//   placeOrder() {
//     // Check if user is authenticated before placing the order
//     if (this.authService.isAuthenticated()) {
//       console.log('User is authenticated, proceeding to checkout');
//       this.router.navigate(['/checkout']).then(success => {
//         if (success) {
//           console.log('Navigation to checkout successful');
//         } else {
//           console.log('Navigation to checkout failed');
//         }
//       });
//     } else {
//       console.log('User is not authenticated, redirecting to login');
//       this.router.navigate(['/login']);
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) {}

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
    if (this.items.length === 0) {
      alert('Your cart is empty');
      this.router.navigate(['/home']);
    } else {
      // Check if user is authenticated before placing the order
      if (this.authService.isAuthenticated()) {
        console.log('User is authenticated, proceeding to checkout');
        this.router.navigate(['/checkout']).then(success => {
          if (success) {
            console.log('Navigation to checkout successful');
          } else {
            console.log('Navigation to checkout failed');
          }
        });
      } else {
        console.log('User is not authenticated, redirecting to login');
        this.router.navigate(['/login']);
      }
    }
  }
}
