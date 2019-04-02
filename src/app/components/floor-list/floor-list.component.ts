import {Component, OnInit} from '@angular/core';
import {FloorsNumberService} from '../../services/floors-number.service';
import {ElevatorsApiService} from '../../services/elevators-api.service';

@Component({
  selector: 'app-floor-list',
  templateUrl: './floor-list.component.html',
  styleUrls: ['./floor-list.component.scss']
})
export class FloorListComponent implements OnInit {
  floorNumbers: object;

  constructor(private floorNumberData: FloorsNumberService, public elevatorsAPI: ElevatorsApiService) {
  }

  ngOnInit() {
    this.elevatorsAPI.getElevators();
    this.floorNumbers =  Array(this.floorNumberData.getFloorNumber()).fill(0).map((x, i) => i);
  }
}
