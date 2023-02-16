import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './body/aboutus/aboutus.component';
import { CoursesClientComponent } from './body/courses-client/courses-client.component';
import { EcommerceComponent } from './body/ecommerce/ecommerce.component';
import { HomeClientComponent } from './body/home-client/home-client.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { NutritionClientComponent } from './body/nutrition-client/nutrition-client.component';
import { RegisterComponent } from './body/register/register.component';
import { ServicesComponent } from './body/services/services.component';
import { YogaClientComponent } from './body/yoga-client/yoga-client.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "yogaclient", component: YogaClientComponent},
  {path: "nutritionclient", component: NutritionClientComponent},
  {path: "ecommerce", component: EcommerceComponent},
  {path: "homeclient", component: HomeClientComponent},
  {path: "services", component: ServicesComponent},
  {path: "register", component: RegisterComponent},
  {path: "coursesclient", component: CoursesClientComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
