import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  myMouseHandler(event, description) {
    console.log(description + " X: "
    + event.screenX.toString()
    + " Y:" + event.screenY.toString())
  }
}
