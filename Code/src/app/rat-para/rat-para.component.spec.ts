import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatParaComponent } from './rat-para.component';

describe('RatParaComponent', () => {
  let component: RatParaComponent;
  let fixture: ComponentFixture<RatParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatParaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
