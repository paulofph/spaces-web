import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.scss']
})
export class SpaceCardComponent implements OnInit {
  public random: number = Math.random()

  constructor() { }

  ngOnInit() {

  }

}
