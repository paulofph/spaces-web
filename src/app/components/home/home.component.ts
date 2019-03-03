import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/services/http/space/space.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private spaceService: SpaceService
  ) { }

  ngOnInit() {
    
  }

  getSpaces(location) {
    console.log(location)
    const subscriber = this.spaceService.getSpaces().subscribe(result => {
      console.log(result);
      subscriber.unsubscribe();
    })
  }
}
