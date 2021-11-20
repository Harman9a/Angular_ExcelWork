import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkIndComponent } from './mark-ind.component';

describe('MarkIndComponent', () => {
  let component: MarkIndComponent;
  let fixture: ComponentFixture<MarkIndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkIndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
