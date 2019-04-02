import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FloorsNumberService {

  floorNumber = 9;
  constructor() { }
  getFloorNumber() {
    return this.floorNumber;
  }
}
