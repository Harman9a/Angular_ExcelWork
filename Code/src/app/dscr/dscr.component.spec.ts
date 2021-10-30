import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscrComponent } from './dscr.component';

describe('DscrComponent', () => {
  let component: DscrComponent;
  let fixture: ComponentFixture<DscrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
