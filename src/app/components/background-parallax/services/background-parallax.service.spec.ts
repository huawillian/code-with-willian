import { TestBed } from '@angular/core/testing';

import { BackgroundParallaxService } from './background-parallax.service';

describe('BackgroundParallaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackgroundParallaxService = TestBed.get(BackgroundParallaxService);
    expect(service).toBeTruthy();
  });
});
