import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './body/register/register.component';
import { ServicesComponent } from './body/services/services.component';
import { HomeClientComponent } from './body/home-client/home-client.component';
import { HomeaboutusComponent } from './body/homeaboutus/homeaboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RegisterComponent,
    ServicesComponent,
    HomeClientComponent,
    HomeaboutusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
