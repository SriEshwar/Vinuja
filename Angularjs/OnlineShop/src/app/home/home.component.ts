import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  // slideIndex: number = 0;

  // ngOnInit(): void {
  //   this.showSlides();
  // }

  // showSlides(): void {
  //   const slides = document.getElementsByClassName('slide-image') as HTMLCollectionOf<HTMLElement>;
  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].style.display = 'none';
  //   }
  //   this.slideIndex++;
  //   if (this.slideIndex > slides.length) { this.slideIndex = 1; }
  //   slides[this.slideIndex - 1].style.display = 'block';
  //   setTimeout(() => this.showSlides(), 10000); // Change image every 2 seconds
  // }
}
