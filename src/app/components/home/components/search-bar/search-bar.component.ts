import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SpaceFilter } from 'src/app/models/filters/space-filter';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() spaceFilter: SpaceFilter;
  @Output() onSearch = new EventEmitter();
  @Output() onAddressChange = new EventEmitter();

  public radiusOptions: Number[] = [10, 20, 50, 100, 200];

  constructor( ) { }

  ngOnInit() {
    this.spaceFilter.radius = this.radiusOptions[0];
    this.spaceFilter.guestCount = 1;
  }

  addressChange(event) {
    this.onAddressChange.emit(event)  
  }

  search() {

    this.onSearch.emit(this.spaceFilter);
  }
}