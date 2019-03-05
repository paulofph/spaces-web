import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalInputComponent } from './numerical-input.component';

describe('NumericalInputComponent', () => {
  let component: NumericalInputComponent;
  let fixture: ComponentFixture<NumericalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
