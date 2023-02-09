import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeaboutusComponent } from './homeaboutus.component';

describe('HomeaboutusComponent', () => {
  let component: HomeaboutusComponent;
  let fixture: ComponentFixture<HomeaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeaboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
