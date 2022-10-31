import { Animal } from '../interfaces/animal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  Test = [];

  private apiUrl: string = 'http://localhost:3000/animals';
  constructor(private http: HttpClient) {}

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  postAnimals(animal: object): Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl, animal);
  }

  putAnimals(name: string, animal: object): Observable<Animal> {
    return this.http.put<Animal>(`${this.apiUrl}/${name}`, animal);
  }

  deleteAnimals(name: Animal): Observable<Animal> {
    return this.http.delete<Animal>(`${this.apiUrl}/${name}`);
  }
  getAnimal(name: string): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${name}`);
  }
}
