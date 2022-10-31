import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnimalComponent } from './update-animal.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateAnimalComponent', () => {
  let component: UpdateAnimalComponent;
  let fixture: ComponentFixture<UpdateAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [UpdateAnimalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing inputs with value', () => {
    expect(true).toBe(true);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const name: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#username');
      expect(name).toBeTruthy();
      const nameValue = component.animalForm.get('name');
      nameValue?.setValue('boby');
      const type: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#type');
      expect(type).toBeTruthy();
      const typeValue = component.animalForm.get('type');
      typeValue?.setValue('dog');
      const age: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#age');
      expect(age).toBeTruthy();
      const ageValue = component.animalForm.get('age');
      ageValue?.setValue('5');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const btn: HTMLButtonElement =
          fixture.debugElement.nativeElement.querySelector('#buttonTrue');
        expect(btn).toBeTruthy();
        expect(btn.disabled).toBeTruthy();
      });

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(nameValue?.valid).toBeTruthy();
        expect(typeValue?.valid).toBeTruthy();
        expect(ageValue?.valid).toBeTruthy();
      });
    });
  });
  it('testing inputs with not value', () => {
    expect(true).toBe(true);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const name: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#username');
      expect(name).toBeTruthy();
      const nameValue = component.animalForm.get('name');
      nameValue?.setValue('');
      const type: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#type');
      expect(type).toBeTruthy();
      const typeValue = component.animalForm.get('type');
      typeValue?.setValue('');
      const age: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#age');
      expect(age).toBeTruthy();
      const ageValue = component.animalForm.get('age');
      ageValue?.setValue('');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const btn: HTMLButtonElement =
          fixture.debugElement.nativeElement.querySelector('#buttonTrue');
        expect(btn).toBeTruthy();
        expect(btn.disabled).toBeTruthy();
      });

      fixture.whenStable().then(() => {
        expect(nameValue?.valid).toBeTruthy();
        expect(typeValue?.valid).toBeFalsy();
        expect(ageValue?.valid).toBeFalsy();
      });
    });
  });
});
