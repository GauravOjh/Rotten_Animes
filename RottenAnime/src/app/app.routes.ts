import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnimesComponent } from './animes/animes.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'anime/:type/:id',component:AnimesComponent},
    {path:'**',component:LoginComponent}
];
