import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredNumberBoxComponent } from './colored-number-box.component';

describe('ColoredNumberBoxComponent', () => {
  let component: ColoredNumberBoxComponent;
  let fixture: ComponentFixture<ColoredNumberBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredNumberBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredNumberBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
