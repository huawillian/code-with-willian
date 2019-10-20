import { TestBed } from '@angular/core/testing';

import { ArticlesResolverService } from './articles-resolver.service';

describe('ArticlesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesResolverService = TestBed.get(ArticlesResolverService);
    expect(service).toBeTruthy();
  });
});
