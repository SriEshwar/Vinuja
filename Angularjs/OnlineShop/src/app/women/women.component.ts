import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  constructor(private cartService: CartService) {}

  shoes = [
    [
      {
        name: 'Shoe 1',
        price: 1999,
        color: 'Red',
        image: 'assets/images/shoe1.png'
      },
      {
        name: 'Shoe 2',
        price: 2499,
        color: 'Blue',
        image: 'assets/images/shoe2.png'
      },
      {
        name: 'Shoe 3',
        price: 2999,
        color: 'Green',
        image: 'assets/images/shoe3.png'
      }
    ],
    [
      {
        name: 'Shoe 4',
        price: 1999,
        color: 'Yellow',
        image: 'assets/images/shoe4.png'
      },
      {
        name: 'Shoe 5',
        price: 2499,
        color: 'Black',
        image: 'assets/images/shoe5.png'
      },
      {
        name: 'Shoe 6',
        price: 2999,
        color: 'White',
        image: 'assets/images/shoe6.png'
      }
    ]
  ];

  addToCart(shoe: any) {
    this.cartService.addToCart(shoe);
    alert(`${shoe.name} has been added to the cart.`);
   
  }
}
