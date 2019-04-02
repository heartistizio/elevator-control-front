import {Component, Input, OnInit} from '@angular/core';
import {FloorsNumberService} from '../../services/floors-number.service';
import {UpdateService} from '../../services/update.service';

@Component({
  selector: 'app-update-buttons',
  templateUrl: './update-buttons.component.html',
  styleUrls: ['./update-buttons.component.scss']
})
export class UpdateButtonsComponent implements OnInit {
  @Input() elevator;
  floorNumbers;
  constructor(private floorNumberData: FloorsNumberService, private updateService: UpdateService) { }

  ngOnInit() {
    this.floorNumbers =  Array(this.floorNumberData.getFloorNumber()).fill(0).map((x, i) => i);
  }

  update(floor) {
    this.updateService.update(floor);
  }
}
