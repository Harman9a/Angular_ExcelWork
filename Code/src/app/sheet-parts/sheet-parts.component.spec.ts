import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetPartsComponent } from './sheet-parts.component';

describe('SheetPartsComponent', () => {
  let component: SheetPartsComponent;
  let fixture: ComponentFixture<SheetPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
