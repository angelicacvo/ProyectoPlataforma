import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './body/aboutus/aboutus.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "aboutus", component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
