import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOrganizerlistComponent } from './eventorganizerlist.component';

describe('EventOrganizerlistComponent', () => {
  let component: EventOrganizerlistComponent;
  let fixture: ComponentFixture<EventOrganizerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventOrganizerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOrganizerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
