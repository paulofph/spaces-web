import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-text-button',
  templateUrl: './icon-text-button.component.html',
  styleUrls: ['./icon-text-button.component.scss']
})
export class IconTextButtonComponent implements OnInit {

  @Input() label: String;
  @Input() icon: String;
  @Input() color: String;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.onClick.emit()
  }
}
