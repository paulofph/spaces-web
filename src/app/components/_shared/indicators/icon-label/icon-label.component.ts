import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.scss']
})
export class IconLabelComponent implements OnInit {
  
  @Input() icon: String;
  @Input() label: String;

  constructor() { }

  ngOnInit() {
  }

}
