import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-root',
template: `<button (click)="getSomeData()">Test GET Request</button>
<ul>
<li *ngFor="let myData of namesArray">{{myData.first}}
{{myData.last}}</li>
</ul>`
})


export class AppComponent {
  namesArray!: Array<any>;
  _http:HttpClient;

  // Since we are using a provider above we can receive
  // an instance through an instructor.
  constructor(private http: HttpClient) {
    this._http = http;
}

getSomeData() {
  this._http.get<any>('./assets/test.json')
    // Get data and wait for result.
    .subscribe(result => {
      this.namesArray = result;
    },

    error =>{
      // Let user know about the error.
      alert(error);
      console.error(error)
    })
  }
}
