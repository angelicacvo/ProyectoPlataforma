import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';

const routes: Routes = [
  // Acá pongo las rutas del header, si es necesario tento que poner los hijos 
  // {
  //   path: ''
  //   component: headerComponent
      // children: [ en los hijos pongo lo que va adentro del header como cursos y eso
      //   {
      //     path: ''
      //     component
      //   }
      // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
