import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() placeholder: String;
  @Input() options: [];
  @Output() onSelect = new EventEmitter();
  public selectedOption: any;

  constructor() { }

  ngOnInit() {
    console.log(this.placeholder)
  }

  selectionChange() {
    this.onSelect.emit(this.selectedOption);
  }
}
