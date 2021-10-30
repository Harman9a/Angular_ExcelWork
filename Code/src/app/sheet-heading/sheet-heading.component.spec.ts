import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetHeadingComponent } from './sheet-heading.component';

describe('SheetHeadingComponent', () => {
  let component: SheetHeadingComponent;
  let fixture: ComponentFixture<SheetHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
