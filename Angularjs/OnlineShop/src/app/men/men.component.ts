// men.component.ts
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  constructor(private cartService: CartService) {}

  shoes = [
    [
      {
        name: 'Shoe 1',
        price: 1999,
        color: 'Red',
        image: 'assets/images/shoe1.jpg'
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

  sizes = [6, 7, 8, 9, 10];
  selectedSize: { [key: string]: number } = {};

  selectSize(shoeName: string, size: number) {
    this.selectedSize[shoeName] = size;
  }

  addToCart(shoe: any) {
    const size = this.selectedSize[shoe.name];
    if (!size) {
      alert('Please select a size');
      return;
    }
    this.cartService.addToCart({ ...shoe, size });
    alert(`${shoe.name} (Size: ${size}) has been added to the cart.`);
  }
}
