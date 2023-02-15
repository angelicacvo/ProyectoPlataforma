import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-recetas-nutrition',
  templateUrl: './recetas-nutrition.component.html',
  styleUrls: ['./recetas-nutrition.component.css']
})
export class RecetasNutritionComponent {
  @Output() option: number = 1;
}
