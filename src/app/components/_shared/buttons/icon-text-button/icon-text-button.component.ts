import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-text-button',
  templateUrl: './icon-text-button.component.html',
  styleUrls: ['./icon-text-button.component.scss']
})
export class IconTextButtonComponent {

  @Input() label: String;
  @Input() icon: String;
  @Input() color: String;
  @Output() onClick = new EventEmitter();

  click() {
    this.onClick.emit()
  }
}
