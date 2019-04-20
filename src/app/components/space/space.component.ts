import { Component, OnInit } from '@angular/core';
import { Space } from 'src/app/models/entities/space';
import { SpaceService } from 'src/app/services/http/space/space.service';
import { ActivatedRoute } from '@angular/router';
import { GoogleMapsService } from 'src/app/services/google-maps/google-maps.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
declare let google: any;

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  public space: Space = new Space();
  public editMode: boolean = true;
  public random: number = Math.random()
  constructor(
    private spaceService: SpaceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const spaceId = params['id'];
      this.getSpace(spaceId);
    });
  }

  getSpace(id: number) {
    const subscriber = this.spaceService.getSpace(id).subscribe(result => {
      this.space = result;
      console.log(this.space)
      subscriber.unsubscribe();
    })
  }
}
