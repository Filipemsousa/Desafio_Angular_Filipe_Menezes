import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { HomeComponent } from "./componentes/home/home.component";
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent, HomeComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio_angular';
}
