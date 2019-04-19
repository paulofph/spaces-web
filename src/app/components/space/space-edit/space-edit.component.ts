import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Space, SpaceType, SpaceCommodity, SpaceTraderType } from 'src/app/models/entities/space';
import { forkJoin } from 'rxjs';
import { SpaceService } from 'src/app/services/http/space/space.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-space-edit',
  templateUrl: './space-edit.component.html',
  styleUrls: ['./space-edit.component.scss']
})
export class SpaceEditComponent implements OnInit { 
  @Output() onSave = new EventEmitter(); 
  @Output() onPublish = new EventEmitter(); 
  
  public space: Space = new Space();
  public locationSearch: String = null;
  public spaceTypes: SpaceType[];
  public spaceTraderTypes: SpaceTraderType[];
  public spaceCommodities: SpaceCommodity[] = [];

  constructor(
    private spaceService: SpaceService,
    public translationService: TranslationService
  ) { }

  ngOnInit() {
    const getSpaceTypes = this.spaceService.getSpaceTypes();
    const getSpaceTraderTypes = this.spaceService.getSpaceTraderTypes();
    const getSpaceCommodities = this.spaceService.getSpaceCommodities();
    let subscriber = forkJoin([getSpaceTypes, getSpaceTraderTypes, getSpaceCommodities]).subscribe((result: any) => {
      this.spaceTypes = result[0];
      this.spaceTraderTypes = result[1];
      result[2].forEach(commodity => {
        this.spaceCommodities.push(new SpaceCommodity(commodity))
      });

      subscriber.unsubscribe();
    })
  }

  onAddressChange(mapsEvent) {
    this.locationSearch = mapsEvent.formatted_address;
    this.space.location.latitude = mapsEvent.geometry.location.lat();
    this.space.location.longitude = mapsEvent.geometry.location.lng();
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

  _addSelectedCommodities() {
    this.space.commodities = [];
    this.space.commodities = this.spaceCommodities
      .filter((commodity: SpaceCommodity) => commodity.selected === true)
  }
}
