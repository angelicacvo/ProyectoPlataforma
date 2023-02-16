import { Component, Output } from '@angular/core';
import { CarouselNutrition } from 'src/app/models/carousel-nutrition.model';

@Component({
  selector: 'app-nutrition-client',
  templateUrl: './nutrition-client.component.html',
  styleUrls: ['./nutrition-client.component.css']
})
export class NutritionClientComponent {
  option!: number;
  @Output() componentOption: number = 0;

  carouselImages: CarouselNutrition[] = [
    {
      img: '../../../assets/img/carousel2.jpg',
      title: 'Nutrición',
      description: 'Combinada con la actividad física y un peso saludable, la buena alimentación <br> es una forma excelente de ayudar a tu cuerpo a mantenerse fuerte y saludable.'
    },
    {
      img: '../../../assets/img/carousel3.jpg',
      title: 'Alimentación consciente',
      description: 'Consiste en dedicar atención plena a la hora de alimentarnos. Porque si comemos de <br> forma consciente, vamos a ser capaces de escuchar nuestras sensaciones, tanto físicas como mentales.'
    },
    {
      img: '../../../assets/img/carousel4.jpg',
      title: 'Comer bien, sentirnos bien',
      description: 'Nutrir tu despensa con alimentos adecuados, mantener buenos hábitos y tener <br> una actitud óptima frente a la comida te ayudará a mejorar tu ánimo'
    },
    {
      img: '../../../assets/img/carousel5.jpg',
      title: 'Beneficios de una dieta saludable',
      description: 'Además de llevar una dieta sana rica en verduras y alimentos integrales, entre otros <br> alimentos, practicar media hora de ejercicio moderado puede ayudarnos <br> a conseguir beneficios tanto a nivel físico como psicológico.'
    }


  ]

  activateComponent(optionNumber: number) {
    this.option = optionNumber;
  }
}
