import { Injectable } from '@angular/core';
import {ElevatorsApiService} from './elevators-api.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  showUpdateButtonComponent = false;
  elevator;
  constructor(private elevatorsAPI: ElevatorsApiService) { }

  showUpdateButtons(elevator) {
    this.showUpdateButtonComponent = true;
    this.elevator = elevator;
  }
  hideUpdateButtons() {
    this.elevator = undefined;
    this.showUpdateButtonComponent = false;
  }
  update(newFloorDestination) {
    this.elevatorsAPI.postUpdate(this.elevator.id, this.elevator.currentFloor, newFloorDestination);
  }
}
