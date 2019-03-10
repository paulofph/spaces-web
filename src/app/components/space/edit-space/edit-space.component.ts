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
    { id: 1, label: 'Churrasco', icon: 'fas fa-hamburger', selected: false },
    { id: 2, label: 'Chapéu(s) de sol', icon: 'fas fa-umbrella-beach', selected: false },
    { id: 3, label: 'Espreguiçadeira(s)', icon: 'fas fa-chair', selected: false },
    { id: 4, label: 'Casa de Banho', icon: 'fas fa-toilet', selected: false },
    { id: 5, label: 'Banho', icon: 'fas fa-shower', selected: false },
    { id: 6, label: 'Toalha de Banho', icon: 'fas fa-hot-tub', selected: false },
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
