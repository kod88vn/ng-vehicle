import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFuelDetailsComponent } from './vehicle-fuel-details.component';

describe('VehicleFuelDetailsComponent', () => {
  let component: VehicleFuelDetailsComponent;
  let fixture: ComponentFixture<VehicleFuelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleFuelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleFuelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
