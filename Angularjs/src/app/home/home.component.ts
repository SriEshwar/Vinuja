import { Component } from '@angular/core';
import { Home } from './home.model'; // Corrected import

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected property name
})
export class HomeComponent {
  items: Home[] = [
    new Home(1, 'Item 1'),
    new Home(2, 'Item 2')
  ];

  newItemName: string = '';

  addItem() {
    if (this.newItemName.trim()) {
      const newItem = new HomeItem(this.items.length + 1, this.newItemName);
      this.items.push(newItem);
      this.newItemName = '';
    }
  }
}
