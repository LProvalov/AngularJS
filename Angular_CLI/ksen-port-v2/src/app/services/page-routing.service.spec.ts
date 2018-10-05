import { TestBed, inject } from '@angular/core/testing';

import { PageRoutingService } from './page-routing.service';

describe('PageRoutingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageRoutingService]
    });
  });

  it('should be created', inject([PageRoutingService], (service: PageRoutingService) => {
    expect(service).toBeTruthy();
  }));
});
