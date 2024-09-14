import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from './componente01/componente01.component';
import { ComponentengifComponent } from './componentengif/componentengif.component';
import { ComponenteNgForComponent } from './componente-ng-for/componente-ng-for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente01Component, ComponentengifComponent,ComponenteNgForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_projetos';
}
