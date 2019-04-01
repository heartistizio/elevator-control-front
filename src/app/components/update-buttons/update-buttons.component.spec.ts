import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateButtonsComponent } from './update-buttons.component';

describe('UpdateButtonsComponent', () => {
  let component: UpdateButtonsComponent;
  let fixture: ComponentFixture<UpdateButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
