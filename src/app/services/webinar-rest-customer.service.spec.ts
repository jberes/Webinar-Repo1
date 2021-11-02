import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WebinarRestCustomerService } from './webinar-rest-customer.service';

describe('WebinarRestCustomerService', () => {
  let service: WebinarRestCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WebinarRestCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
