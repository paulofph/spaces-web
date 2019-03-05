import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from './../../../../models/entities/location' 

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onLocationChange = new EventEmitter();

  public radiusOptions: Number[] = [10, 20, 50, 100];
  public radius: Number = this.radiusOptions[0];
  public location: Location = new Location;
  public guestCount: Number = 1;

  constructor() { }

  ngOnInit() {
  }

  onAddressChange(event) {
    this.location.latitude = event.geometry.location.lat();
    this.location.longitude = event.geometry.location.lon();
  }

  onGuestChange(radius: Number) {
    // this.radius = radius;
  }

  search() {
    
  }
}