import { Component } from '@angular/core';
import { Plans } from './plans.model';
import { Product } from './products.model';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent {
  plans: Plans[] = [
    {
      name: 'White',
      price: 200.0,
      description:
        'Contenido freemium, recursos, clases y cursos, comunicate con nuestros expertos, accede a clases de cocina saludable, encuentra eventos relacionados con el bienestar',
    },
    {
      name: 'Black',
      price: 500.0,
      description:
        'Contenido freemium, recursos, clases y cursos, comunicate con nuestros expertos, accede a clases de cocina saludable, encuentra eventos relacionados con el bienestar, accede a clases personalizadas con los instructores, accede a contenido exclusivo',
    },
  ];

  products: Product[] = [
    {
      nameP: 'Cursos de meditacion',
      subProduct: [
        {
          name: 'Curso de meditación para principiantes',
          price: 30.0,
          description:
            'En este curso aprenderás los conceptos básicos de meditación para principiantes',
          image: '../../../assets/img/meditacion-ecommerce.jpg',
        },
        {
          name: 'Curso de meditación para intermedios',
          price: 30.0,
          description:
            'En este curso aprenderás a conectar con tu yo interior y a sanar desde la consciencia',
          image: '../../../assets/img/meditacion-intermedios-ecommerce.jpg',
        },
        {
          name: 'Curso de meditación para avanzados',
          price: 30.0,
          description:
            'En este curso aprenderás la meditación tibetana y mindulness',
          image: '../../../assets/img/meditación-avanzada-ecommerce.jpg',
        },
      ],
    },
    {
      nameP: 'Cursos de yoga',
      subProduct: [
        {
          name: 'Yoga para principiantes',
          price: 180.0,
          description: 'En este curso aprenderás las bases del yoga',
          image: '../../../assets/img/yoga-principiantes.jpg',
        },
        {
          name: 'Yoga para intermedios',
          price: 190.0,
          description:
            'En este curso aprenderás posiciones más complejas, entre otras sorpresas',
          image: '../../../assets/img/yoga-intermedios.jpg',
        },
        {
          name: 'Yoga para avanzados',
          price: 200.0,
          description:
            'En este curso aprenderás diferentes métodos del yoga y meditación consciente',
          image: '../../../assets/img/yoga-avanzados.jpg',
        },
      ],
    },
    {
      nameP: 'Cursos de medicina alternativa',
      subProduct: [
        {
          name: 'Aceites medicinales',
          price: 120.0,
          description:
            'Aprenderás el uso de los aceites esenciales como medicina natural para dolores, ansiedad, entre otros múltiples beneficios',
          image: '../../../assets/img/curso-aceites-medicinales.jpg',
        },
        {
          name: 'Cristales protectores',
          price: 140.0,
          description: 'Aprenderás los usos de los cristales protectores',
          image: '../../../assets/img/curso-cristales-protectores.jpg',
        },
        {
          name: 'Medicina ancestral',
          price: 210.0,
          description:
            'Aprenderás sobre medicina ancestral y curación con plantas',
          image: '../../../assets/img/medicina-ancestral.jpg',
        },
      ],
    },
    {
      nameP: 'Cursos de alimentación',
      subProduct: [
        {
          name: 'Alimentación balanceada',
          price: 160.0,
          description:
            'Aprende a realizar diferentes preparaciones para que balancees tus comidas',
          image: '../../../assets/img/alimentacion-balanceada.jpg',
        },
        {
          name: 'Alimentación saludable basada en plantas',
          price: 130.0,
          description: 'Aprende a realizar platos exquisitos a base de plantas',
          image: '../../../assets/img/alimentacion-saludable-plantas.jpg',
        },
        {
          name: 'Alimentación consciente',
          price: 170.0,
          description:
            'Aprende a ver los alimentos de diferente manera con recetas que te encantarán',
          image: '../../../assets/img/alimentacion-consciente.jpg',
        },
      ],
    },
    {
      nameP: 'Expertos',
      subProduct: [
        {
          name: 'Doctor Eugenio Marin',
          price: 100.0,
          description: 'Consulta con el doctor Eugenio Marín',
          image: '../../../assets/img/doctor-eugenio.jpg',
        },
        {
          name: 'Maestra de yoga Gloria Muñoz',
          price: 120.0,
          description: 'Maestra de yoga te guiará de manera predeterminada',
          image: '../../../assets/img/gloria-muñoz-yoga.jpg',
        },
        {
          name: 'Coach Yohan Bejarano',
          price: 90.0,
          description: 'Coach de vida y salud',
          image: '../../../assets/img/coach-yojan.jpg',
        },
      ],
    },
  ];
}
