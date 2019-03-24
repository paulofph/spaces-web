import { Component, OnInit, Input } from '@angular/core';
import { Space } from 'src/app/models/entities/space';

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.component.html',
  styleUrls: ['./spaces-list.component.scss']
})
export class SpacesListComponent implements OnInit {

  @Input() spaces: Space[];
  constructor() { }

  ngOnInit() {
  }

}
