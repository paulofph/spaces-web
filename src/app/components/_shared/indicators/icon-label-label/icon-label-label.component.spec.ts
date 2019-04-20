import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLabelLabelComponent } from './icon-label-label.component';

describe('IconLabelLabelComponent', () => {
  let component: IconLabelLabelComponent;
  let fixture: ComponentFixture<IconLabelLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLabelLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLabelLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
