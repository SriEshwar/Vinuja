import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
   Name:String="Vinuja";
   CollegeName:String="Sri Eshwar College Of Engineering";
   userName: string = "John Doe";
   tooltipMessage: string = "Enter your name here";
   Fontcolor:String="blue";
   isActive:boolean=true;
   inputValue: string = "Initial value";
   onButtonClick() {
    alert("Button clicked!");
  }
  firstName: string = "John";

}
