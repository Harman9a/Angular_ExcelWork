import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAppComponent } from './man-app.component';

describe('ManAppComponent', () => {
  let component: ManAppComponent;
  let fixture: ComponentFixture<ManAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
