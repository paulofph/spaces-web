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

  constructor(
    private spaceService: SpaceService
  ) { }

  ngOnInit() {
  }

  save(space: Space) {
    let subscriber = this.spaceService.saveSpace(space).subscribe(_ => {
      subscriber.unsubscribe();
    });
  }

  publish(space: Space) {
    let subscriber = this.spaceService.saveSpace(space).subscribe(_ => {
      subscriber.unsubscribe();
    });
  }
}
