import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetRowComponent } from './sheet-row.component';

describe('SheetRowComponent', () => {
  let component: SheetRowComponent;
  let fixture: ComponentFixture<SheetRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
