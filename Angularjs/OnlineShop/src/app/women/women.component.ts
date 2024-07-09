// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { CartService } from '../cart.service';
// import { FooterComponent } from '../footer/footer.component';

// @Component({
//   selector: 'app-women',
//   standalone: true,
//   imports: [CommonModule, FooterComponent],
//   templateUrl: './women.component.html',
//   styleUrls: ['./women.component.css']
// })
// export class WomenComponent {
//   constructor(private cartService: CartService) {}

//   shoes = [
//     [
//       {
//         name: 'Brogue',
//         price: 1999,
//         color: 'Red',
//         image: 'assets/images/shoe2.png'
//       },
//       {
//         name: 'Shoe 2',
//         price: 2499,
//         color: 'Blue',
//         image: 'assets/images/shoe2.png'
//       },
//       {
//         name: 'Shoe 3',
//         price: 2999,
//         color: 'Green',
//         image: 'assets/images/shoe3.png'
//       }
//     ],
//     [
//       {
//         name: 'Shoe 4',
//         price: 1999,
//         color: 'Yellow',
//         image: 'assets/images/shoe4.png'
//       },
//       {
//         name: 'Shoe 5',
//         price: 2499,
//         color: 'Black',
//         image: 'assets/images/shoe5.png'
//       },
//       {
//         name: 'Shoe 6',
//         price: 2999,
//         color: 'White',
//         image: 'assets/images/shoe6.png'
//       }
//     ]
//   ];

//   sizes = [6, 7, 8, 9, 10];
//   selectedSize: { [key: string]: number } = {};

//   selectSize(shoeName: string, size: number) {
//     this.selectedSize[shoeName] = size;
//   }

//   addToCart(shoe: any) {
//     const size = this.selectedSize[shoe.name];
//     if (!size) {
//       alert('Please select a size');
//       return;
//     }
//     this.cartService.addToCart({ ...shoe, size });
//     alert(`${shoe.name} (Size: ${size}) has been added to the cart.`);
//   }
// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FooterComponent } from '../footer/footer.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CommonModule, FooterComponent, FilterComponent],
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  constructor(private cartService: CartService) {}

  shoes = [
    [
      {
        name: 'Brogue',
        price: 1999,
        color: 'Red',
        image: 'assets/images/brogue.webp',
        width:400,
        height:350
      },
      {
        name: 'Shoe 2',
        price: 2499,
        color: 'Blue',
        image: 'assets/images/oxford.webp',
        width:400,
        height:350
      },
      {
        name: 'Shoe 3',
        price: 2999,
        color: 'Green',
        image: 'assets/images/oxford.webp',
        width:400,
        height:350
      }
    ],
    [
      {
        name: 'Shoe 4',
        price: 1999,
        color: 'Yellow',
        image: 'assets/images/oxford.webp',
        width:400,
        height:350
      },
      {
        name: 'Shoe 5',
        price: 2499,
        color: 'Black',
        image: 'assets/images/oxford.webp',
        width:400,
        height:350
      },
      {
        name: 'Shoe 6',
        price: 2999,
        color: 'White',
        image: 'assets/images/oxford.webp',
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
