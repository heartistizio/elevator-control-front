import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaftComponent } from './shaft.component';

describe('ShaftComponent', () => {
  let component: ShaftComponent;
  let fixture: ComponentFixture<ShaftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
