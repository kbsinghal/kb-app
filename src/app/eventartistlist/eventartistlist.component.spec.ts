import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventArtistlistComponent } from './eventartistlist.component';

describe('EventArtistlistComponent', () => {
  let component: EventArtistlistComponent;
  let fixture: ComponentFixture<EventArtistlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventArtistlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventArtistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
