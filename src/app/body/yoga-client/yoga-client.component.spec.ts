import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaClientComponent } from './yoga-client.component';

describe('YogaClientComponent', () => {
  let component: YogaClientComponent;
  let fixture: ComponentFixture<YogaClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
