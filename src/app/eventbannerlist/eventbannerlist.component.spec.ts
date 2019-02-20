import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBannerlistComponent } from './eventbannerlist.component';

describe('EventBannerlistComponent', () => {
  let component: EventBannerlistComponent;
  let fixture: ComponentFixture<EventBannerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBannerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBannerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
