import { Component, OnInit, Input } from '@angular/core';
import { Space } from 'src/app/models/entities/space';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  @Input() space: Space;

  constructor(
    public translationService: TranslationService
  ) { }

  ngOnInit() {
  }

}
