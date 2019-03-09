import { Component, OnInit, Input } from '@angular/core';
import { Space } from 'src/app/models/entities/space';
import { Location } from 'src/app/models/entities/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() center: Location;
  @Input() spaces: Space[];
  public icon: any;
  constructor() { }

  ngOnInit() {
    this.icon= {
      url: './assets/images/placeholder.svg',
      scaledSize: {
          width: 40,
          height: 60
      }
    }
  }

  title: string = 'My first AGM project';
  lat: number = 43.678418;
  lng: number = -79.809007;

  title1: string = 'My first AGM project';
  lat1: number = 44.678420;
  lng1: number = -79.809009;



  onClick() {
    console.log('hey')
  }
}
