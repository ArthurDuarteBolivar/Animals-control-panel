import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studing-angular';
  click: number = 3;
  disabled = false
  name: string = "";
  show = true
  make: string = "Lambo"
  array = ["Chevy", "Ford", "BMW", "Lambo"]
  clicks(){
    this.disabled = false;
    this.show = !this.show
    this.click++
  }

  getLambo(){
    return "Lambo";
  }
}
