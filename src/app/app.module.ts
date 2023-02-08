import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { YogaClientComponent } from './body/yoga-client/yoga-client.component';
import { NutritionClientComponent } from './body/nutrition-client/nutrition-client.component';
import { CoursesEcommerceComponent } from './body/courses-ecommerce/courses-ecommerce.component';
import { RecetarioNutritionComponent } from './body/nutrition-client/recetario-nutrition/recetario-nutrition.component';
import { ContactNutritionComponent } from './body/nutrition-client/contact-nutrition/contact-nutrition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    YogaClientComponent,
    NutritionClientComponent,
    CoursesEcommerceComponent,
    RecetarioNutritionComponent,
    ContactNutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
