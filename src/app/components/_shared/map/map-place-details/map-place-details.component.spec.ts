import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPlaceDetailsComponent } from './map-place-details.component';

describe('MapPlaceDetailsComponent', () => {
  let component: MapPlaceDetailsComponent;
  let fixture: ComponentFixture<MapPlaceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPlaceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPlaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
