import { TestBed, inject } from '@angular/core/testing';

import { LoadingNotifycationService } from './loading-notifycation.service';

describe('LoadingNotifycationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingNotifycationService]
    });
  });

  it('should be created', inject([LoadingNotifycationService], (service: LoadingNotifycationService) => {
    expect(service).toBeTruthy();
  }));
});
