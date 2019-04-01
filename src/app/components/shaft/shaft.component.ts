import {Component, Input, OnInit} from '@angular/core';
import {FloorsNumberService} from '../../services/floors-number.service';

@Component({
  selector: 'app-shaft',
  templateUrl: './shaft.component.html',
  styleUrls: ['./shaft.component.scss']
})
export class ShaftComponent implements OnInit {
  @Input() elevator;
  floorNumber;
  floors: object;

  constructor(private floorNumberData: FloorsNumberService) {
  }

  ngOnInit() {
    this.floorNumber = this.floorNumberData.getFloorNumber();

    this.floors = Array.from(Array(this.floorNumber), (value, index) => {
      return {
        floor: index,
        isElevator: this.elevator.currentFloor === index ? 1 : 0
      };
    });
  }
}
