import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  count: number;

  constructor(){
    this.count = 0;
  }

  myMouseEnter() {
    console.log("Mouse entered!")
  }

  mouseleave(){
    this.count = this.count + 1;

    console.log("Mouse has left. Count: " + this.count);
  }
}
