import { Component} from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { routes } from './app.routes'; 
import { MenComponent } from './men/men.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { FilterComponent } from './filter/filter.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,NavbarComponent,HomeComponent,
    WomenComponent,CartComponent,MenComponent,FooterComponent,RegisterComponent,
    ReactiveFormsModule,RouterLink,LoginComponent,
    CheckoutComponent,PaymentComponent,OrdersuccessComponent,FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnlineShop';
}

