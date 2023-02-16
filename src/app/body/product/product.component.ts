import { Component } from '@angular/core';
import { Plans } from 'src/app/models/plans.model';
import { Product } from 'src/app/models/products.model';
import { SubProducts } from 'src/app/models/subProducts.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  subProduct: object [] = [];
  planes: object = [];
  aux: any = [];
  aux2: any = [];

  plans: Plans[] = [
    {
      name: 'White',
      price: 300000,
      description:
        'Contenido freemium, recursos, clases y cursos, comunicate con nuestros expertos, accede a clases de cocina saludable, encuentra eventos relacionados con el bienestar',
    },
    {
      name: 'Black',
      price: 500000,
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
          price: 12000,
          description:
            'En este curso aprenderás los conceptos básicos de meditación para principiantes',
          image: '../../../assets/img/meditacion-ecommerce.jpg',
        },
        {
          name: 'Curso de meditación para intermedios',
          price: 130000,
          description:
            'En este curso aprenderás a conectar con tu yo interior y a sanar desde la consciencia',
          image: '../../../assets/img/meditacion-intermedios-ecommerce.jpg',
        },
        {
          name: 'Curso de meditación para avanzados',
          price: 170000,
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
          price: 180000,
          description: 'En este curso aprenderás las bases del yoga',
          image: '../../../assets/img/yoga-principiantes.jpg',
        },
        {
          name: 'Yoga para intermedios',
          price: 190000,
          description:
            'En este curso aprenderás posiciones más complejas, entre otras sorpresas',
          image: '../../../assets/img/yoga-intermedios.jpg',
        },
        {
          name: 'Yoga para avanzados',
          price: 200000,
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
          price: 120000,
          description:
            'Aprenderás el uso de los aceites esenciales como medicina natural para dolores, ansiedad, entre otros múltiples beneficios',
          image: '../../../assets/img/curso-aceites-medicinales.jpg',
        },
        {
          name: 'Cristales protectores',
          price: 140000,
          description: 'Aprenderás los usos de los cristales protectores',
          image: '../../../assets/img/curso-cristales-protectores.jpg',
        },
        {
          name: 'Medicina ancestral',
          price: 210000,
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
          price: 160000,
          description:
            'Aprende a realizar diferentes preparaciones para que balancees tus comidas',
          image: '../../../assets/img/alimentacion-balanceada.jpg',
        },
        {
          name: 'Alimentación saludable basada en plantas',
          price: 130000,
          description: 'Aprende a realizar platos exquisitos a base de plantas',
          image: '../../../assets/img/alimentacion-saludable-plantas.jpg',
        },
        {
          name: 'Alimentación consciente',
          price: 170000,
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
          price: 100000,
          description: 'Consulta con el doctor Eugenio Marín',
          image: '../../../assets/img/doctor-eugenio.jpg',
        },
        {
          name: 'Maestra de yoga Gloria Muñoz',
          price: 120000,
          description: 'Maestra de yoga te guiará de manera predeterminada',
          image: '../../../assets/img/gloria-muñoz-yoga.jpg',
        },
        {
          name: 'Coach Yohan Bejarano',
          price: 90000,
          description: 'Coach de vida y salud',
          image: '../../../assets/img/coach-yojan.jpg',
        },
      ],
    },
  ];

  onAddToCart(name: string, price: number, description: string, image:string) {
    // this.subProduct.push(subProduct);
    // localStorage.setItem('cart', JSON.stringify(this.subProduct));
    this.aux = (JSON.parse(localStorage.getItem('cart') || '[ ]'))
    this.subProduct = [
      ...this.aux, {
        name, price, description, image
      }
    ]
    console.log(this.aux)
    localStorage.setItem('cart', JSON.stringify(this.subProduct));
    setTimeout(() => {
      window.location.reload();
      }, 1000);
  }

  onAddToCartPlanes(name: string, price: number, description: string) {
    this.aux2 = (JSON.parse(localStorage.getItem('plansCart') || '[ ]'))
    this.planes = [
      ...this.aux2, {
        name, price, description
      }
    ]
    console.log(this.aux2)
    localStorage.setItem('plansCart', JSON.stringify(this.planes));
    setTimeout(() => {
      window.location.reload();
      }, 1000);
  }


}



