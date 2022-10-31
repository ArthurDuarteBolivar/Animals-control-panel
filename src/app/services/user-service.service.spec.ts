import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Serializer } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { UserServiceService } from './user-service.service';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserServiceService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Method Get', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getAnimals();
    expect(spy).toHaveBeenCalledWith('http://localhost:3000/animals');
  });
});
