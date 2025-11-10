import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { HomeComponent } from "./componentes/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio_angular';
}
