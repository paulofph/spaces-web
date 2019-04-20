import { Component, OnInit, Input } from '@angular/core';
import { SpaceCommodity } from 'src/app/models/entities/space';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.scss']
})
export class CommoditiesComponent implements OnInit {

  @Input() commodities: SpaceCommodity[];

  constructor(
    public translationService: TranslationService
  ) { }

  ngOnInit() {
  }
}
