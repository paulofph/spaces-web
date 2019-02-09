import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-account',
  templateUrl: './horizontal-account.component.html',
  styleUrls: ['./horizontal-account.component.scss']
})
export class HorizontalAccountComponent implements OnInit {

  @Input() name: string;
  @Input() picture: string;

  constructor() { }

  ngOnInit() {
  }

}
