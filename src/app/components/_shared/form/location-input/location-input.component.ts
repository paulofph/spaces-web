import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss']
})
export class LocationInputComponent implements OnInit {

  @Input() searchText: String = null;
  @Output() onAddressChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addressChange(event) {
    this.onAddressChange.emit(event)
  }
}
