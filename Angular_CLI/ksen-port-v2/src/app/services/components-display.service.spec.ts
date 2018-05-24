import { TestBed, inject } from '@angular/core/testing';

import { ComponentsDisplayService } from './components-display.service';

describe('ComponentsDisplayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentsDisplayService]
    });
  });

  it('should be created', inject([ComponentsDisplayService], (service: ComponentsDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
