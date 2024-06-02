import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { Route,RouterModule } from '@angular/router';
import { MenComponent } from './men/men.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HomeComponent,WomenComponent,CartComponent,MenComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnlineShop';
}
