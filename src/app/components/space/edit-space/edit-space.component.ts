import { Component, OnInit, Input } from '@angular/core';
import { Space, SpaceType, Amenity } from 'src/app/models/entities/space';

@Component({
  selector: 'app-edit-space',
  templateUrl: './edit-space.component.html',
  styleUrls: ['./edit-space.component.scss']
})
export class EditSpaceComponent implements OnInit {

  public spaceTypeOptions: SpaceType[] = [
    { id: 1, label: 'Particular' },
    { id: 2, label: 'Hotel' }
  ];

  public amenitiesOptions: Amenity[] = [
    { id: 1, label: 'Churrasco', icon: '' }
  ];

  public locationSearch: String = null;

  @Input() space: Space;

  constructor() { }

  ngOnInit() {
  }

  onAddressChange(mapsEvent) {
    this.locationSearch = mapsEvent.formatted_address;
  }
}
