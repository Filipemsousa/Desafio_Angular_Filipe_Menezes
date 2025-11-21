import { Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { HomeComponent } from './componentes/home/home.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path:"index",component:IndexComponent},
    {path:"home",component:HomeComponent, canActivate: [AuthGuard]},
    {path:"dashboard",component:DashboardComponent, canActivate: [AuthGuard]},
    {path:"",redirectTo:"index",pathMatch:"full"}
];
