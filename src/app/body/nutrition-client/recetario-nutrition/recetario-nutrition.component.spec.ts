import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetarioNutritionComponent } from './recetario-nutrition.component';

describe('RecetarioNutritionComponent', () => {
  let component: RecetarioNutritionComponent;
  let fixture: ComponentFixture<RecetarioNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetarioNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetarioNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
