import { UserServiceService } from '../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.scss'],
})
export class UpdateAnimalComponent implements OnInit {
  res: string = '';
  resColor: string = '';
  public animalName: any = '';
  animalForm = this.fb.group({
    name: [''],
    type: ['', Validators.required],
    age: ['', Validators.required],
  });
  constructor(
    private userService: UserServiceService,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((param) => {
      this.animalName = param;
    });
    this.resColor = 'green';
    this.animalForm.patchValue({
      name: this.animalName.name,
      type: '',
      age: '',
    });
  }
  updateAnimals() {
    if (this.animalForm.status == 'INVALID') {
      this.resColor = 'red';
      this.res = `Preencha todos os campos`;
    } else {
      // if (this.animalForm.value.name == '') {
      //   // this.animalForm.value.name = this.animalName.name;
      //   this.animalForm.setValue({ name: 'arthur', type: 'dog', age: '4' });
      // }
      this.userService
        .putAnimals(this.animalName, this.animalForm.value)
        .subscribe(
          (res) => {
            this.resColor = 'green';
            this.res = `Animal ${this.animalForm.value.name} atualizado com sucesso`;
          },
          (err) => {
            this.resColor = ' red';
            this.res = `Servidor em falha no momento`;
          }
        );
    }
  }
}
