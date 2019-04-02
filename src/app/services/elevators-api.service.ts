import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ElevatorsApiService {
  // serverHostname = 'http://localhost:8080';
  serverHostname = 'https://elevator-control.herokuapp.com';
  constructor(private http: HttpClient) {
  }

  elevatorList: object;
  getElevatorList() {
    return this.elevatorList;
  }
  getElevators() {
    this.http.get(`${this.serverHostname}/elevators`).subscribe( response => {
      this.elevatorList = response;
    });
  }

  getStep() {
    this.http.get(`${this.serverHostname}/step`).subscribe( response => {
      this.elevatorList = response;
    });
  }

  postPickup(callingFloor: number, direction: number) {
    this.http.post(`${this.serverHostname}/pickup`, {callingFloor, direction}).subscribe( response => {
      this.elevatorList = response;
    });
  }

  postUpdate(idOfElevator: number, currentFloor: number, newFloorDestination: number) {
    this.http.post(`${this.serverHostname}/update`, {idOfElevator, currentFloor, newFloorDestination}).subscribe( response => {
      this.elevatorList = response;
    });
  }

/*  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }*/
}
