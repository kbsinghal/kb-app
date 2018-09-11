import { TestBed, inject } from '@angular/core/testing';

import { EventOrganizerService } from './eventorganizer.service';

describe('EventOrganizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventOrganizerService]
    });
  });

  it('should be created', inject([EventOrganizerService], (service: EventOrganizerService) => {
    expect(service).toBeTruthy();
  }));
});
