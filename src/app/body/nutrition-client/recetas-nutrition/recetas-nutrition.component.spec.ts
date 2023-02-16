import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasNutritionComponent } from './recetas-nutrition.component';

describe('RecetasNutritionComponent', () => {
  let component: RecetasNutritionComponent;
  let fixture: ComponentFixture<RecetasNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
