import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-recetario-nutrition',
  templateUrl: './recetario-nutrition.component.html',
  styleUrls: ['./recetario-nutrition.component.css']
})
export class RecetarioNutritionComponent {
  @Output() option: number = 0;
}
