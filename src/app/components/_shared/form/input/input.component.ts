import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  
  @Input() placeholder: String;
  @Input() model: any;
  @Output() modelChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.modelChange.emit(this.model)
  }
}
