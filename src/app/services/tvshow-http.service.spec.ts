import { TestBed } from '@angular/core/testing';

import { TvShowHttpService } from './tvshow-http.service';

describe('MovieHttpService', () => {
  let service: TvShowHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
