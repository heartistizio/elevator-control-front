import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElevatorComponent } from './components/elevator/elevator.component';
import { BuildingComponent } from './components/building/building.component';
import { FloorComponent } from './components/floor/floor.component';
import { ShaftComponent } from './components/shaft/shaft.component';
import {HttpClientModule} from '@angular/common/http';
import { FloorListComponent } from './components/floor-list/floor-list.component';
import { PickupButtonsComponent } from './components/pickup-buttons/pickup-buttons.component';
import { StepButtonComponent } from './components/step-button/step-button.component';
import { UpdateButtonsComponent } from './components/update-buttons/update-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ElevatorComponent,
    BuildingComponent,
    FloorComponent,
    ShaftComponent,
    FloorListComponent,
    PickupButtonsComponent,
    StepButtonComponent,
    UpdateButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
