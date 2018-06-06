import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/models';

@Component({
  selector: 'app-four-line-list',
  templateUrl: './four-line-list.component.html',
  styleUrls: ['./four-line-list.component.scss']
})
export class FourLineListComponent implements OnInit {

  @Input() public title: string;
  @Input() public items: IProduct[];

  constructor() { }

  ngOnInit() {
  }

}
