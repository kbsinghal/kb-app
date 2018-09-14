import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventArtistformComponent } from './eventartistform.component';

describe('EventArtistformComponent', () => {
  let component: EventArtistformComponent;
  let fixture: ComponentFixture<EventArtistformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventArtistformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventArtistformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
