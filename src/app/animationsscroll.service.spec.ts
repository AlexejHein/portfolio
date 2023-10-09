import { TestBed } from '@angular/core/testing';

import { AnimationsscrollService } from './animationsscroll.service';

describe('AnimationsscrollService', () => {
  let service: AnimationsscrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationsscrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
