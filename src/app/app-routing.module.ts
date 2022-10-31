import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { GetAnimalComponent } from './get-animal/get-animal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: GetAnimalComponent
  },
  {
    path: "updateAnimal/:name",
    component: UpdateAnimalComponent
  },
  {
    path: "createAnimal",
    component: CreateAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
