import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElevatorComponent } from './components/elevator/elevator.component';
import { BuildingComponent } from './components/building/building.component';
import { FloorComponent } from './components/floor/floor.component';
import {HttpClientModule} from '@angular/common/http';
import { FloorListComponent } from './components/floor-list/floor-list.component';
import { PickupButtonsComponent } from './components/pickup-buttons/pickup-buttons.component';
import { StepButtonComponent } from './components/step-button/step-button.component';
import { UpdateButtonsComponent } from './components/update-buttons/update-buttons.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ElevatorComponent,
    BuildingComponent,
    FloorComponent,
    FloorListComponent,
    PickupButtonsComponent,
    StepButtonComponent,
    UpdateButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
