import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-contact-nutrition',
  templateUrl: './contact-nutrition.component.html',
  styleUrls: ['./contact-nutrition.component.css']
})
export class ContactNutritionComponent {
  @Output() option: number = 2;
}
