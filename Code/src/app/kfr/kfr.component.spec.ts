import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KfrComponent } from './kfr.component';

describe('KfrComponent', () => {
  let component: KfrComponent;
  let fixture: ComponentFixture<KfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
