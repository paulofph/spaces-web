import { Component, OnInit, Input } from '@angular/core';
import { Space } from 'src/app/models/entities/space';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.scss']
})
export class SpaceCardComponent implements OnInit {
  
  @Input() space: Space;
  public random: number = Math.random()


  constructor() { }

  ngOnInit() {
  
  }

  get title():string {
    return this.space.title || 'Sem Titulo';
  }

}
