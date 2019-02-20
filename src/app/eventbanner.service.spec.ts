import { TestBed, inject } from '@angular/core/testing';

import { EventBannerService } from './eventbanner.service';

describe('EventBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBannerService]
    });
  });

  it('should be created', inject([EventBannerService], (service: EventBannerService) => {
    expect(service).toBeTruthy();
  }));
});


