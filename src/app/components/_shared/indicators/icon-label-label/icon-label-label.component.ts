import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-label-label',
  templateUrl: './icon-label-label.component.html',
  styleUrls: ['./icon-label-label.component.scss']
})
export class IconLabelLabelComponent implements OnInit {
  
  @Input() icon: String;
  @Input() mainLabel: String;
  @Input() secondaryLabel: String;

  constructor() { }

  ngOnInit() {
  }

}
