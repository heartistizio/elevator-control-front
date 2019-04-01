import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  @Input() shaft;

  constructor() { }

  ngOnInit() {
  }

}
