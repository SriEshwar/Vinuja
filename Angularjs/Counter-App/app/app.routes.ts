
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CounterComponent } from './counter/counter.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {path:'counter',component:CounterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];
