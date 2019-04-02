import {Component, Input, OnInit} from '@angular/core';
import {ElevatorsApiService} from '../../services/elevators-api.service';
import {UpdateService} from '../../services/update.service';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit {
  @Input() elevator;

  constructor(private elevatorsAPI: ElevatorsApiService, private updateService: UpdateService) { }

  ngOnInit() {
  }

  showButtons(elevator) {
    this.updateService.showUpdateButtons(elevator);
  }
  update(newFloorDestination) {
    this.elevatorsAPI.postUpdate(this.elevator.id, this.elevator.currentFloor, newFloorDestination);
  }
}
