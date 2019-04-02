import { Component, OnInit } from '@angular/core';
import {ElevatorsApiService} from '../../services/elevators-api.service';

@Component({
  selector: 'app-step-button',
  templateUrl: './step-button.component.html',
  styleUrls: ['./step-button.component.scss']
})
export class StepButtonComponent implements OnInit {

  constructor(private elevatorsAPI: ElevatorsApiService, private updateService: UpdateService) { }

  ngOnInit() {
  }

  step() {
    this.elevatorsAPI.getStep();
    this.updateService.showUpdateButtonComponent = false;
  }
}
