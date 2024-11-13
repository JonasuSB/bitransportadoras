import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TestegraficoComponent } from "./testegrafico/testegrafico.component";
import { Testegrafico2Component } from './testegrafico2/testegrafico2.component';
import { Testegrafico3Component } from "./testegrafico3/testegrafico3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, TestegraficoComponent, Testegrafico2Component, Testegrafico3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bitransportadoras';
}
