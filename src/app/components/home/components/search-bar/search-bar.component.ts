import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from './../../../../models/entities/location' 
import { SpaceFilter } from 'src/app/models/filters/space-filter';
import { SpaceService } from 'src/app/services/http/space/space.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onLocationChange = new EventEmitter();

  public radiusOptions: Number[] = [10, 20, 50, 100];
  public spaceFilter: SpaceFilter = new SpaceFilter();

  constructor(
    private spaceService: SpaceService
  ) { }

  ngOnInit() {
    this.spaceFilter.radius = this.radiusOptions[0];
    this.spaceFilter.guestCount = 1;
  }

  onAddressChange(event) {
    this.spaceFilter.location.latitude = event.geometry.location.lat();
    this.spaceFilter.location.longitude = event.geometry.location.lng();
  }

  search() {
    console.log(this.spaceFilter)
    this.spaceService.getSpaces(this.spaceFilter).subscribe(result => {

    })
  }
}