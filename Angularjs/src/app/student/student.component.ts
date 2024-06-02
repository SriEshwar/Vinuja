import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
        StudentName:String="Vinuja M";
        StudentMark:number=490;
        JoinDate:Date=new Date();
        Message:String="This ia an Event Binding";

        displayMessage(){
          alert(this.Message);
        }
}
