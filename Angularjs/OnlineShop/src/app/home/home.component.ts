import { Component , OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  orderPlaced: boolean = false;
  orderDetails: any;
  cancelable: boolean = false;
  delivered: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.orderDetails = this.cartService.getOrderDetails();
    if (this.orderDetails) {
      this.orderPlaced = true;
      this.checkOrderStatus();
    }
  }

  checkOrderStatus() {
    const currentDate = new Date();
    const orderDate = new Date(this.orderDetails.orderDate);
    const cancelDeadline = new Date(orderDate);
    cancelDeadline.setDate(orderDate.getDate() + 4);
    const deliveryDate = new Date(this.orderDetails.deliveryDate);
    this.cancelable = currentDate <= cancelDeadline;
    this.delivered = currentDate >= deliveryDate;
  }

  cancelOrder() {
    if (confirm('Are you sure you want to cancel the order?')) {
      this.cartService.clearOrderDetails();
      this.orderPlaced = false;
      this.orderDetails = null;
      alert('Order has been canceled');
    }
  }

}
