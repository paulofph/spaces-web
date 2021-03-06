import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: any[];
  @Input() mode: string = 'mosaic';
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  ngOnInit() { }
}
