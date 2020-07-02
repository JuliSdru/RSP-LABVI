import { TestBed } from '@angular/core/testing';

import { ServicioSPService } from './servicio-sp.service';

describe('ServicioSPService', () => {
  let service: ServicioSPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
