import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  servicesDataModal = [
    {
      tituloRecursos: 'Recursos',
      textRecursos:
        'Nuestra página cuenta con una gran cantidad de variedad de recursos, entre ellos podemos encontrar los siguientes:',
      liR1: 'Sección de servicios en la cuál te encuentras actualmente, donde encontrarás información sobre todo lo que ofrecemos en nuestra página web',
      liR2: 'Página home en la cuál encontrarás información sobre nosotros, algunos de nuestros expertos y la ubicación de nuestra empresa',
      liR3: 'Una sección para que te puedas registrar',
      liR4: 'Servicio de login para autenticar tu usuario y poder ingresar',
      liR5: 'Secciones para poder adquirir cursos, citas, nutrición o eventos',
      liR6: 'Tu propio home como cliente, donde podrás ver tu árbol del progreso, cursos adquiridos, tu perfil y la sección "Recetas con historias"',

      tituloEventos: 'Eventos',
      textEventos:
        'En esta sección podrás encontrar los eventos próximos a llevarse a cabo por la empresa, junto a los eventos podrás encontrar un calendario en el cual podrás seleccionar la fecha y ver que eventos se llevaran a cabo ese día.',

      tituloAsesorias: 'Asesorías',
      textAsesorias:
        'En esta sección podrás agendar asesorías con algunos de nuestros expertos en: ',
      liA1: 'Yoga',
      liA2: 'Nutrición',
      liA3: 'Meditación',
      liA4: 'Mindfulness',

      tituloYoga: 'Clases de yoga',
      textYoga:
        'Aquí podrás encontrar todo lo relacionado con las clases de yoga, eventos o cursos que tenemos disponibles para ti en nuestra página.',
      p2Yoga: '¿qué estás esperando para iniciar?',

      tituloNutricion: 'Nutrición saludable',
      textNutricion:
        'Esta sección esta hecha para que saques al máximo el beneficio que tiene una buena alimentación, podrás encontrar desde recetarios, tus contenidos sobre alimentación guardado y mucho mas!',
    },
  ];
}
