import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupButtonsComponent } from './pickup-buttons.component';

describe('PickupButtonsComponent', () => {
  let component: PickupButtonsComponent;
  let fixture: ComponentFixture<PickupButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
