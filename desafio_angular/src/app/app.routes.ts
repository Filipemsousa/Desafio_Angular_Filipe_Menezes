import { Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    {path:"index",component:IndexComponent},
    {path:"home",component:HomeComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"",redirectTo:"index",pathMatch:"full"}
];
