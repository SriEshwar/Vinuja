import { Injectable } from '@angular/core';
import { Shoe } from './filter/shoe';
@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  shoes = [
    { name: 'Shoe 1', color: 'Red', size: 6, price: 1999 },
    { name: 'Shoe 2', color: 'blue', size: 7, price: 1200 },
    // Add more shoe objects here
  ];

  getShoes() {
    return this.shoes;
  }
}
