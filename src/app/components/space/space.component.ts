import { Component, OnInit } from '@angular/core';
import { Space } from 'src/app/models/entities/space';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  public space: Space = new Space();

  constructor() { }

  ngOnInit() {
  }

}
