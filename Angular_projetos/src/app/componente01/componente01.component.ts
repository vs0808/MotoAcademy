import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { eventNames } from 'process';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  name: string = 'Vinicius'
  name2: string = 'Claudio'
  

  alerta(){
    alert("clicked")
    
  }

  isActive: boolean = false;


}
