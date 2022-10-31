import { animate } from '@angular/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExpressionType } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAnimalComponent } from './create-animal.component';

describe('CreateAnimalComponent', () => {
  let component: CreateAnimalComponent;
  let fixture: ComponentFixture<CreateAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [CreateAnimalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deve renderizar o título em uma tag h1', () => {
    const fixture = TestBed.createComponent(CreateAnimalComponent);
    fixture.detectChanges();
    const compilado = fixture.debugElement.nativeElement;
    expect(compilado.querySelector('h1').textContent).toContain(
      'Create animals'
    );
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
        expect(nameValue?.valid).toBeFalsy();
        expect(typeValue?.valid).toBeFalsy();
        expect(ageValue?.valid).toBeFalsy();
      });
    });
  });
});
