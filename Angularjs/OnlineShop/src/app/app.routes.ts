import {  RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { CartComponent } from './cart/cart.component';
import { MenComponent } from './men/men.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "women", component: WomenComponent,canActivate: [authGuard] },
    {path:"cart",component:CartComponent,canActivate: [authGuard]},
    {path:"men",component:MenComponent,canActivate: [authGuard]},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    { path: "checkout", component: CheckoutComponent, canActivate: [authGuard]},
    { path: 'payment', component: PaymentComponent,canActivate: [authGuard]},
    {path:'ordersuccess',component:OrdersuccessComponent,canActivate: [authGuard]},
    { path: '**', redirectTo: '/login' }
    
];
