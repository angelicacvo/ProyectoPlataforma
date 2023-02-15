import { Component, OnInit } from '@angular/core';
import { Plans } from 'src/app/models/plans.model';
import { SubProducts } from 'src/app/models/subProducts.model';


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
   cart : SubProducts[] = [{
    name: '',
    price: 0,
    description: '',
    image: ' ',
   }
  ]

  planes: Plans[] = [{
      name: '',
      price: 0,
      description: '',
  }]

   ngOnInit(): void {
    // this.planes = (JSON.parse(localStorage.getItem('cartPlanes') || 'Toca tiparlo'))
    this.cart = (JSON.parse(localStorage.getItem('cart') || '[]'))
    this.planes = (JSON.parse(localStorage.getItem('plansCart') || '[]'))
    console.log(this.cart)
    console.log('planes', this.planes)
   }

   showCart() {
    
   }


}


