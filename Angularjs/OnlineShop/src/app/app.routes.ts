import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { CartComponent } from './cart/cart.component';
export const routes: Routes = [
    { path: '/', component: HomeComponent },
    { path: '/women', component: WomenComponent },
    {path:'/cart',component:CartComponent}
];
