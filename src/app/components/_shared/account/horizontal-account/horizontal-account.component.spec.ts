import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalAccountComponent } from './horizontal-account.component';

describe('HorizontalAccountComponent', () => {
  let component: HorizontalAccountComponent;
  let fixture: ComponentFixture<HorizontalAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
