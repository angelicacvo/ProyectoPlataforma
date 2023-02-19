import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasHistoriasComponent } from './recetas-historias.component';

describe('RecetasHistoriasComponent', () => {
  let component: RecetasHistoriasComponent;
  let fixture: ComponentFixture<RecetasHistoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasHistoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
