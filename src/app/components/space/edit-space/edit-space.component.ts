import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Space, SpaceType, SpaceCommodity } from 'src/app/models/entities/space';
import { forkJoin } from 'rxjs';
import { SpaceService } from 'src/app/services/http/space/space.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-edit-space',
  templateUrl: './edit-space.component.html',
  styleUrls: ['./edit-space.component.scss']
})
export class EditSpaceComponent implements OnInit { 
  @Input() space: Space;
  @Output() onSave = new EventEmitter(); 
  @Output() onPublish = new EventEmitter(); 
  
  public locationSearch: String = null;
  public spaceTypes: SpaceType[];
  public spaceCommodities: SpaceCommodity[] = [];

  constructor(
    private spaceService: SpaceService,
    public translationService: TranslationService
  ) { }

  ngOnInit() {
    const getSpaceTypes = this.spaceService.getSpaceTypes();
    const getSpaceCommodities = this.spaceService.getSpaceCommodities();
    let subscriber = forkJoin([getSpaceTypes, getSpaceCommodities]).subscribe((result: any) => {
      this.spaceTypes = result[0];
      result[1].forEach(commodity => {
        this.spaceCommodities.push(new SpaceCommodity(commodity))
      });
      console.log(this.spaceCommodities)
      subscriber.unsubscribe();
    })
  }

  onAddressChange(mapsEvent) {
    this.locationSearch = mapsEvent.formatted_address;
    this.space.location.latitude = mapsEvent.geometry.location.lat();
    this.space.location.longitude = mapsEvent.geometry.location.lng();
  }

  save() {
    this._addSelectedCommodities();
    this.onSave.emit(this.space);
  }

  publish() {
    this._addSelectedCommodities();
    this.onPublish.emit(this.space);
  }

  _addSelectedCommodities() {
    this.space.commodities = [];
    this.space.commodities = this.spaceCommodities
      .filter((commodity: SpaceCommodity) => commodity.selected === true)
  }
}
