import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
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
