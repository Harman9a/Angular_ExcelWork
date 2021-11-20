import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollGuaComponent } from './coll-gua.component';

describe('CollGuaComponent', () => {
  let component: CollGuaComponent;
  let fixture: ComponentFixture<CollGuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollGuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollGuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
