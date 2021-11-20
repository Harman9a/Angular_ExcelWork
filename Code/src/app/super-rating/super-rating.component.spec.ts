import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperRatingComponent } from './super-rating.component';

describe('SuperRatingComponent', () => {
  let component: SuperRatingComponent;
  let fixture: ComponentFixture<SuperRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
