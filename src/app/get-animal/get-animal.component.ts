import { UserServiceService } from '../services/user-service.service';
import { Animal } from '../interfaces/animal';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-animal',
  templateUrl: './get-animal.component.html',
  styleUrls: ['./get-animal.component.scss'],
})
export class GetAnimalComponent implements OnInit {
  animals: Animal[] = [];
  animalDetails = '';
  constructor(
    private userService: UserServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.userService.getAnimals().subscribe((response) => {
      this.animals = response;
      console.log(`O animal ${this.animals}`);
    });
  }
  removeAnimal(animal: Animal) {
    this.userService.deleteAnimals(animal).subscribe((res) => {
      location.reload();
    });
  }
}
