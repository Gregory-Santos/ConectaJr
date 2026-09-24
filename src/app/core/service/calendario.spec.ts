import { TestBed } from '@angular/core/testing';
import { Calendario } from './calendario';

describe('Calendario', () => {
  let service: Calendario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calendario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
