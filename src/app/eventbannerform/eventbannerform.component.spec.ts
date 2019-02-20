import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBannerformComponent } from './eventbannerform.component';

describe('EventBannerformComponent', () => {
  let component: EventBannerformComponent;
  let fixture: ComponentFixture<EventBannerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBannerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBannerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
