import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentengif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentengif.component.html',
  styleUrl: './componentengif.component.css'
})
export class ComponentengifComponent {
 visivel: boolean = true

 abrir(){
  if(this.visivel == false){
    this.visivel = true
  }else{
    this.visivel = false
  }
 }
}
