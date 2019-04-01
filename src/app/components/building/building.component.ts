import { Component, OnInit } from '@angular/core';
import { ElevatorsApiService } from '../../services/elevators-api.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  constructor(public elevatorsAPI: ElevatorsApiService) { }

  ngOnInit() {
    this.elevatorsAPI.getElevators();
  }
}
