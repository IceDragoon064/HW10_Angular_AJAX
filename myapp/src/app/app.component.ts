import { Component } from '@angular/core';

// This component consumes the re-usable service.
@Component({
  selector: 'app-root',
  template: `
    <h3>Please enter the customer information:</h3>
    <child [callParent]="parentFuncRef" [city]="op"></child>
    {{dataFromChild}}
  `
})



export class AppComponent {
  parentFuncRef: Function;
  operations: Array<any>;
  dataFromChild: string;
  op: string;
  // This function is called by the Angular framework after
  // the constructor executes.
  public ngOnInit() {
    this.parentFuncRef = this.myCallBackFunction.bind(this);
  }

  // This function can be called by child.
  public myCallBackFunction(streetAddress: string, city: string) {
    this.dataFromChild =
     "Street Address: " + streetAddress + " " +
      "City: " + city;
  }
}
