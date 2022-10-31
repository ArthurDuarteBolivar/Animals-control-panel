import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnimalComponent } from './get-animal.component';

describe('GetAnimalComponent', () => {
  let component: GetAnimalComponent;
  let fixture: ComponentFixture<GetAnimalComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GetAnimalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
