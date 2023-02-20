import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { YogaClientComponent } from './body/yoga-client/yoga-client.component';
import { NutritionClientComponent } from './body/nutrition-client/nutrition-client.component';
import { RecetarioNutritionComponent } from './body/nutrition-client/recetario-nutrition/recetario-nutrition.component';
import { RecetasNutritionComponent } from './body/nutrition-client/recetas-nutrition/recetas-nutrition.component';
import { ContactNutritionComponent } from './body/nutrition-client/contact-nutrition/contact-nutrition.component';
import { RegisterComponent } from './body/register/register.component';
import { ServicesComponent } from './body/services/services.component';
import { HomeClientComponent } from './body/home-client/home-client.component';
import { CoursesClientComponent } from './body/courses-client/courses-client.component';
import { EcommerceComponent } from './body/ecommerce/ecommerce.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './body/product/product.component';

import { AboutusComponent } from './body/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './body/login/login.component';
import { RecetasHistoriasComponent } from './recetas-historias/recetas-historias.component';
import { ArbolComponent } from './body/arbol/arbol.component';
import { ContactanosComponent } from './body/contactanos/contactanos.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    YogaClientComponent,
    NutritionClientComponent,
    RecetarioNutritionComponent,
    ContactNutritionComponent,
    RegisterComponent,
    ServicesComponent,
    HomeClientComponent,
    CoursesClientComponent,
    RecetasNutritionComponent,
    EcommerceComponent,
    PageNotFoundComponent,
    ProductComponent,
    AboutusComponent,
    LoginComponent,
    RecetasHistoriasComponent,
    ArbolComponent,
    ContactanosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
