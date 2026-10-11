import { TestBed } from '@angular/core/testing';
import { ParticipantesService } from './participantes-service';

describe('ParticipantesService', () => {
  let service: ParticipantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
