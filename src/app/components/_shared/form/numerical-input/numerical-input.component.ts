
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numerical-input',
  templateUrl: './numerical-input.component.html',
  styleUrls: ['./numerical-input.component.scss']
})
export class NumericalInputComponent implements OnInit {

  @Input() placeholder: String;
  @Input() model: any;
  @Output() modelChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.modelChange.emit(this.model)
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
