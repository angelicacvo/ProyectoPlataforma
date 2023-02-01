import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansEcommerceComponent } from './plans-ecommerce.component';

describe('PlansEcommerceComponent', () => {
  let component: PlansEcommerceComponent;
  let fixture: ComponentFixture<PlansEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
