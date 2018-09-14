import { TestBed, inject } from '@angular/core/testing';

import { EventArtistService } from './eventartist.service';

describe('EventArtistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventArtistService]
    });
  });

  it('should be created', inject([EventArtistService], (service: EventArtistService) => {
    expect(service).toBeTruthy();
  }));
});


