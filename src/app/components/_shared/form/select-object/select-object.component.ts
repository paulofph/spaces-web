import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-object',
  templateUrl: './select-object.component.html',
  styleUrls: ['./select-object.component.scss']
})
export class SelectObjectComponent {

  @Input() placeholder: String;
  @Input() options: [];
  @Input() model: any;
  @Output() modelChange = new EventEmitter();

  selectionChange() {
    this.modelChange.emit(this.model)
  }
}
