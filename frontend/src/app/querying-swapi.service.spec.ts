import { TestBed, inject } from '@angular/core/testing';

import { QueryingSwapiService } from './querying-swapi.service';

describe('QueryingSwapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryingSwapiService]
    });
  });

  it('should be created', inject([QueryingSwapiService], (service: QueryingSwapiService) => {
    expect(service).toBeTruthy();
  }));
});
