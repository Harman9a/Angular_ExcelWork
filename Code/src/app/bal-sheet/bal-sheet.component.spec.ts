import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalSheetComponent } from './bal-sheet.component';

describe('BalSheetComponent', () => {
  let component: BalSheetComponent;
  let fixture: ComponentFixture<BalSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
