import { Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { HomeComponent } from './componentes/home/home.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

export const routes: Routes = [
    {path:"index",component:IndexComponent},
    {path:"home",component:HomeComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"",redirectTo:"index",pathMatch:"full"},
    {path:"",redirectTo:"dashboard",pathMatch:"full"}
];
