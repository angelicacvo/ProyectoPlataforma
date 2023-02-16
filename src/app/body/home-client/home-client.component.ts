import { Component } from '@angular/core';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css'],
})
export class HomeClientComponent {
  elementosHome = [
    {
      imagen:
        'https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png',
      nombre: 'Nombre usuario',

      tituloPlan: 'White',
      precioPlan: 'COP300,000.00',
      contenidoPlan:
        'Contenido freemium recursos, clases y cursos comunicate con nuestros expertos.',
      contenidoPlan2:
        'Accede a clases de cocina saludable encuentra eventos relacionados con el bienestar',
    },
  ];
}
