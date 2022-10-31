import { UserServiceService } from '../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.scss'],
})
export class CreateAnimalComponent implements OnInit {
  res: string = '';
  resColor: string = '';
  isDisabled = '';
  animalForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    age: ['', Validators.required],
  });
  constructor(
    private userService: UserServiceService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.resColor = 'green';
  }

  createAnimals(): any {
    if (this.animalForm.status == 'INVALID') {
      this.resColor = 'red';
      this.res = `Preencha todos os campos`;
      console.log(this.animalForm.controls.age);
      return 'err';
    } else {
      this.userService.postAnimals(this.animalForm.value).subscribe(
        (result) => {
          this.resColor = 'green';
          this.res = `O Animal ${result.name} foi cadastrado com sucesso`;
          return 'success';
        },
        (err) => {
          this.resColor = 'red';
          this.res = `Servidor em falha no momento`;
          return 'err';
        }
      );
    }
  }
}
