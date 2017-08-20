import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecallDetailsComponent } from './recall-details.component';

describe('RecallDetailsComponent', () => {
  let component: RecallDetailsComponent;
  let fixture: ComponentFixture<RecallDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecallDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
