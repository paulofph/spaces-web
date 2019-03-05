import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() placeholder: String;
  @Input() options: [];
  @Input() model: any;
  @Output() modelChange = new EventEmitter();

  selectionChange() {
    this.modelChange.emit(this.model)
  }
}
