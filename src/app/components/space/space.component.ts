import { Component, OnInit } from '@angular/core';
import { Space } from 'src/app/models/entities/space';
import { SpaceService } from 'src/app/services/http/space/space.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  public space: Space = new Space();
  public editMode: boolean = true;

  constructor(
    private spaceService: SpaceService
  ) { }

  ngOnInit() {
  }
}
