import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor(public authService: AuthService,private router: Router) { }

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
