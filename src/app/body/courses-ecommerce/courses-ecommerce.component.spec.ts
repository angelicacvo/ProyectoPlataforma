import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEcommerceComponent } from './courses-ecommerce.component';

describe('CoursesEcommerceComponent', () => {
  let component: CoursesEcommerceComponent;
  let fixture: ComponentFixture<CoursesEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
