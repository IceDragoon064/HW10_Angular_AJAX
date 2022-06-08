import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  cutContent = '';
  myContent: string;
  myPastedContent:string;

  cutEvent(content) {
    this.cutContent = content;
    console.log(content)
  }

  pasteContent() {
    console.log(this.cutContent);
    this.cutContent = '';
  }
}
