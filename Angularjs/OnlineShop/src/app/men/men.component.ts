
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule,FooterComponent,FilterComponent],
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  constructor(private cartService: CartService) {}

  shoes = [
    [
      {
        name: 'Brogue',
        price: 1999,
        color: 'Brown',
        image: 'assets/images/brogue.webp',
        width:400,
        height:350
      },
      {
        name: 'Oxford',
        price: 2499,
        color: 'Black',
        image: 'assets/images/oxford.webp',
        width:400,
        height:350
      
      },
      {
        name: 'Monk Strap',
        price: 1999,
        color: 'Blue',
        image: 'assets/images/monkstrap.jpeg',
        width:400,
        height:350
        
      }
    ],
    [
      {
        name: 'Chukka Boot',
        price: 1000,
        color: 'Red',
        image: 'assets/images/chuhhaboot.jpg',
        width:400,
        height:350
      },
      {
        name: 'Loafer',
        price: 1499,
        color: 'White',
        image: 'assets/images/loafer.jpg',
        width:400,
        height:350
      },
      {
        name: 'Derby',
        price: 2000,
        color: 'Pink',
        image: 'assets/images/derby.webp',
        width:400,
        height:350
      }
    ]
  ];

  sizes = [6, 7, 8, 9, 10];
  selectedSize: { [key: string]: number } = {};
  filteredShoes = this.shoes;

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
  applyFilters(filters: any) {
    const { names, sizes, colors, priceRanges } = filters;
    this.filteredShoes = this.shoes.map(row =>
      row.filter(shoe => 
        (!names.length || names.includes(shoe.name)) &&
        (!sizes.length || sizes.includes(this.selectedSize[shoe.name])) &&
        (!colors.length || colors.includes(shoe.color)) &&
        (!priceRanges.length || priceRanges.some((range: { label: string, range: number[] }) => shoe.price >= range.range[0] && shoe.price <= range.range[1]))
      )
    );
  }
}

