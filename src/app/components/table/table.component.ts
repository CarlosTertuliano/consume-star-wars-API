import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/Planet';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() planets : Planet[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.planets);
  }


}
