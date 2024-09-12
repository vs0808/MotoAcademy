import { Component } from '@angular/core';

@Component({
  selector: 'app-componentengif',
  standalone: true,
  imports: [],
  templateUrl: './componentengif.component.html',
  styleUrl: './componentengif.component.css'
})
export class ComponentengifComponent {
  exibir:boolean = true;
  acao(){
    if(this.exibir ===true){
      this.exibir = false;
    }else{
      this.exibir= true;
    }
  }
}
