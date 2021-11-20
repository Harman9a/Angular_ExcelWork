import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FRatReportComponent } from './frat-report.component';

describe('FRatReportComponent', () => {
  let component: FRatReportComponent;
  let fixture: ComponentFixture<FRatReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FRatReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FRatReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
