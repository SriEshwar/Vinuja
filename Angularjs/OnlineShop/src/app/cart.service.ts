
import { Injectable } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  color: string;
  image: string;
  size: number;
  quantity: number;
  deliveryDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private orderDetails: any = null;
  addToCart(item: CartItem) {
    const existingItem = this.items.find(cartItem => cartItem.name === item.name && cartItem.size === item.size);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 7);
      this.items.push({ ...item, quantity: 1, deliveryDate });
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(name: string, size: number) {
    this.items = this.items.filter(item => item.name !== name || item.size !== size);
  }

  updateQuantity(name: string, size: number, quantity: number) {
    const item = this.items.find(cartItem => cartItem.name === name && cartItem.size === size);
    if (item && quantity > 0) {
      item.quantity = quantity;
    } else if (item && quantity === 0) {
      this.removeItem(name, size);
    }
  }
  setOrderDetails(details: any) {
    this.orderDetails = { ...details, orderDate: new Date() };
  }

  getOrderDetails() {
    return this.orderDetails;
  }

  clearOrderDetails() {
    this.orderDetails = null;
  }
  
}
