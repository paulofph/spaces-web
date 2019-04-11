import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colored-number-box',
  templateUrl: './colored-number-box.component.html',
  styleUrls: ['./colored-number-box.component.scss']
})
export class ColoredNumberBoxComponent {
  @Input() value: number;
}
