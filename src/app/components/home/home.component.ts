import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/services/http/space/space.service';
import { Space } from 'src/app/models/entities/space';
import { SpaceFilter } from 'src/app/models/filters/space-filter';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Location } from 'src/app/models/entities/location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public spaces: Space[];
  public mapCenter: Location = new Location();
  public spaceFilter: SpaceFilter = new SpaceFilter()

  constructor(
    private spaceService: SpaceService,
    private navigationService: NavigationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params && params.latitude && params.longitude) {
        this.spaceFilter.location.longitude = +params.longitude || null;
        this.spaceFilter.location.latitude = +params.latitude || null;
        this.spaceFilter.radius = +params.radius || null;
        this.spaceFilter.guestCount = +params.guestCount || null;
        this.spaceFilter.searchText = params.searchText || null;
        this.searchSpaces();
      }
    })
  }

  addressChange(event) {
    this.spaceFilter.searchText = event.formatted_address;
    this.spaceFilter.location.latitude = event.geometry.location.lat();
    this.spaceFilter.location.longitude = event.geometry.location.lng();
  }

  searchSpaces(query?: SpaceFilter) {
    this.spaceFilter = query ? query : this.spaceFilter;
    this._updateRoute();
    const subscriber = this.spaceService.getSpaces(this.spaceFilter).subscribe(result => {
      this._updateMapCenter();
      this.spaces = result;
      subscriber.unsubscribe();
    })
  }

  _updateRoute() {
    this.navigationService.addQueryParams({
      longitude: this.spaceFilter.location.longitude || null,
      latitude: this.spaceFilter.location.latitude || null,
      radius: this.spaceFilter.radius || null,
      guestCount: this.spaceFilter.guestCount || null,
      searchText: this.spaceFilter.searchText || null,
    })
  }

  _updateMapCenter() {
    this.mapCenter.longitude = this.spaceFilter.location.longitude;
    this.mapCenter.latitude = this.spaceFilter.location.latitude;
  }
}
