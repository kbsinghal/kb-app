import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOrganizerformComponent } from './eventorganizerform.component';

describe('EventOrganizerformComponent', () => {
  let component: EventOrganizerformComponent;
  let fixture: ComponentFixture<EventOrganizerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventOrganizerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOrganizerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
