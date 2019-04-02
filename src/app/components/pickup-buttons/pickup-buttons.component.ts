import {Component, Input, OnInit} from '@angular/core';
import {ElevatorsApiService} from '../../services/elevators-api.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pickup-button',
  templateUrl: './pickup-buttons.component.html',
  styleUrls: ['./pickup-buttons.component.scss']
})
export class PickupButtonsComponent implements OnInit {
  @Input() floor;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  constructor(private elevatorsAPI: ElevatorsApiService) { }

  ngOnInit() {
  }

  pickup(direction) {
    this.elevatorsAPI.postPickup(this.floor, direction);
  }
}
