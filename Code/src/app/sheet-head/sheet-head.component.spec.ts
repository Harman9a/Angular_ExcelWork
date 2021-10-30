import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetHeadComponent } from './sheet-head.component';

describe('SheetHeadComponent', () => {
  let component: SheetHeadComponent;
  let fixture: ComponentFixture<SheetHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SheetHeadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
