import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IscrComponent } from './iscr.component';

describe('IscrComponent', () => {
  let component: IscrComponent;
  let fixture: ComponentFixture<IscrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IscrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IscrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
