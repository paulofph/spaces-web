import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/services/http/space/space.service';
import { Space } from 'src/app/models/entities/space';
import { SpaceFilter } from 'src/app/models/filters/space-filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public spaces: Space[];
  public spaceFilter: SpaceFilter = new SpaceFilter()

  constructor(
    private spaceService: SpaceService
  ) { }

  ngOnInit() {
    
  }

  getSpaces(query: SpaceFilter) {
    console.log(query)
    this.spaceFilter = query || null;
    const subscriber = this.spaceService.getSpaces(this.spaceFilter).subscribe(result => {
      this.spaces = result;
      subscriber.unsubscribe();
    })
  }
}
