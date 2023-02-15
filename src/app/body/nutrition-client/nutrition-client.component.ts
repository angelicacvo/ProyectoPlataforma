import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nutrition-client',
  templateUrl: './nutrition-client.component.html',
  styleUrls: ['./nutrition-client.component.css']
})
export class NutritionClientComponent {
  option!: number;
  @Output() componentOption: number = 0;

  activateComponent() {
    this.option = this.componentOption;
  }
}
