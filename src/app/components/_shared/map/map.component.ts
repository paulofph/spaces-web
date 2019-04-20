import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Space } from 'src/app/models/entities/space';
import { Location } from 'src/app/models/entities/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() center: Location;
  @Input() spaces: Space[] = [];
  @Input() height: number = 600;
  @Output() onReady = new EventEmitter();
  
  public icon: any;
  public mapHeight: string;
  constructor() { }

  ngOnInit() {
    this.mapHeight = this.height + 'px';
    this.icon= {
      url: './assets/images/placeholder.svg',
      scaledSize: {
          width: 40,
          height: 60
      }
    }
  }

  onClick() {
    console.log('hey')
  }

  mapReady() {
    this.onReady.emit();
  }
}
