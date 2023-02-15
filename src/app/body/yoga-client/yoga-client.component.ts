import { Component } from '@angular/core';
import { InstructoresYoga } from 'src/app/models/instructores.model';
import { TecnicasYoga } from 'src/app/models/tecnicas.model';

@Component({
  selector: 'app-yoga-client',
  templateUrl: './yoga-client.component.html',
  styleUrls: ['./yoga-client.component.css']
})
export class YogaClientComponent {


  instructores: InstructoresYoga[] = [
    {
      img: 'https://cdnx.jumpseller.com/dhanayoga/image/3849894/7.jpg?1534117603',
      name: 'Malova Elena',
      description: 'Hola, soy Elena Malova, instructora de Vinyasa Yoga, bienvenid@s a las clases dedicadas al desarrollo de la conexión entre cuerpo y consciencia en cada movimiento Muchas gracias por su apoyo y la energía, abrazos, namaste!'
    },
    {
      img: 'https://108yogacolombia.com/wp-content/uploads/2021/04/Andrea-chehebar-1.jpg',
      name: 'Andrea Chehebar',
      description: 'Certificada con el Yoga Alliance como E-RYT, Andrea incursionó en la practica del yoga hace 16 años. Tuvo la oportunidad de recibir la sabiduría de diferentes reconocidos profesores que la han inspirado para encontrar su propio camino en el yoga.'
    },
    {
      img: 'https://108yogacolombia.com/wp-content/uploads/2021/04/jesus-duque-108-yoga-2.jpg',
      name: 'Jesús Duque',
      description: 'Desde el año 2014 comenzó a dictar clases en los mejores estudios de yoga de Bogotá (Natural Yoga,Yoga Studio, Neutra Bienestar, entre otros), en empresas y a dar clases personalizadas.'
    },
    {
      img: 'https://108yogacolombia.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-12-at-4.37.52-PM-1024x1024.jpeg',
      name: 'Karo Moreno',
      description: 'Lleva años explorando diferentes estilos de yoga, perfeccionando su práctica en multiples talleres con reconocidos profesores. Actualmente comparte su pasión por el yoga en sus clases llenas de carisma y dedicación, donde se enfoca en sacar lo mejor de cada alumno según su nivel y capacidad.'
    },
    {
      img: 'https://108yogacolombia.com/wp-content/uploads/2021/04/angela-vanegas-108-yoga.jpg',
      name: 'Ángela Vanegas',
      description: 'Su amor por enseñar y entrega se transmiten en sus clases de Vinyasa Yoga, Yoga Prenatal y Yogaterapia, donde integra sus conocimientos de diferentes estilos y años de experiencia.'
    },
    {
      img: 'https://108yogacolombia.com/wp-content/uploads/2021/04/ivan-moreno-108-yoga.jpg',
      name: 'Iván Moreno',
      description: 'Desde los 18 años empieza a estudiar tradiciones orientales y conoce el Yoga. Se certifica como profesor de Yoga Integral. Complementa su estudio con cursos y practicas enfocadas en el Power Yoga y estilos dinámicos.'
    }
  ]

  tecnicas: TecnicasYoga[] = [
    {
      img: 'https://www.shape.com/thmb/bqrjc9pwWUEnPqS88TS2bCuRDyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hatha-yoga-promo-35d5d3b2e1284d09ba6c5752b82bef5b.jpg',
      name: 'Hatha Yoga',
      description: 'Abarca no sólo los aspectos físicos de la práctica yóguica, sino también de la respiración, la meditación y la purificación espiritual.',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0077/7587/9266/articles/kundalini-yoga-art-lotuscrafts_4514ec10-c77f-4dbf-b1ff-4e060c4e8b92_600x600_crop_center.jpg?v=1552925943',
      name: 'Kundalini',
      description: 'La kundalini es la energía primordial o shakti que llega a desarrollarse en plenitud al reunirse con la conciencia (Shivá), y el atma (alma) con el Brahman.',
    },
    {
      img: 'https://www.cuerpomente.com/medio/2021/04/08/yoga-terapeutico_451e68dc_1200x1200.jpg',
      name: 'Yoga terapeutico',
      description: 'Adopta un enfoque más suave que se centra en posturas de apoyo, ejercicios de respiración y meditación guiada',
    }
  ]

}
