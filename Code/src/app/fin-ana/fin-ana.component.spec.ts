import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinAnaComponent } from './fin-ana.component';

describe('FinAnaComponent', () => {
  let component: FinAnaComponent;
  let fixture: ComponentFixture<FinAnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinAnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
