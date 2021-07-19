import { TestBed } from '@angular/core/testing';

import { InMemoryGameService } from './in-memory-game.service';

describe('InMemoryGameServiceService', () => {
  let service: InMemoryGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
