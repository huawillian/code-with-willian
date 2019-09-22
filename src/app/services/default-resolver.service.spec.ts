import { TestBed } from '@angular/core/testing';

import { DefaultResolverService } from './default-resolver.service';

describe('DefaultResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultResolverService = TestBed.get(DefaultResolverService);
    expect(service).toBeTruthy();
  });
});
