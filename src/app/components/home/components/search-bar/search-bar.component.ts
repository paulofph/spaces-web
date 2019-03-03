import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onLocationChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleAddressChange(event) {
    this.onLocationChange.emit(event);
    console.log(event.geometry.location.lat())
  }

}
