import { Component, OnInit } from '@angular/core';
import { FloorsNumberService } from '../../services/floors-number.service';

@Component({
  selector: 'app-floor-list',
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss']
})
export class FloorListComponent implements OnInit {
  floorNumbers;
  constructor(private floorNumberData: FloorsNumberService) { }

  ngOnInit() {
    this.floorNumbers =  Array(this.floorNumberData.getFloorNumber()).fill(0).map((x, i) => i);
  }

}
