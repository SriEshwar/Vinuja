import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
   templateUrl: './app.component.html',
  // template:`<h3>Welcome All</h3>
  // <h1>{{title}}</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Welcome to learn AngularJS';
  getName(){
    return "vinuja";
  }
  clickCount=0;
  clickMe(){
    this.clickCount++;
  }

  Movies=[
    "The great india kitchen",
    "Miss India",
    "Zootopia",
    "Harry potter"
  ]

  screenVisible="true";
  UserName="VINUJA";
  College="sri eshwar college of engineering";
  dateExample=Date.now();
  Currency=678;
  CurrencyinRupees= 20000;
}


