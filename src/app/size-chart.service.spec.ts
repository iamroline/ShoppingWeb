import { TestBed } from '@angular/core/testing';

import { SizeChartService } from './size-chart.service';

describe('SizeChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeChartService = TestBed.get(SizeChartService);
    expect(service).toBeTruthy();
  });
});
