import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNutritionComponent } from './contact-nutrition.component';

describe('ContactNutritionComponent', () => {
  let component: ContactNutritionComponent;
  let fixture: ComponentFixture<ContactNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
