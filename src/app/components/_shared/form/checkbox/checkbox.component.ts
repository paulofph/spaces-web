import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() icon: String;
  @Input() label: String;
  @Input() model: any;
  @Output() modelChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.modelChange.emit(this.model)
  }
}
