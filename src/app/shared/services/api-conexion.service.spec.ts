import { TestBed } from '@angular/core/testing';

import { ApiConexionService } from './api-conexion.service';

describe('ApiConexionService', () => {
  let service: ApiConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
