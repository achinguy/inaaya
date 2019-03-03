import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  encapsulation: ViewEncapsulation.None // The styling defined in client.component.css will be added to head section of the DOM, so applied both on parent and child.
  //encapsulation: ViewEncapsulation.Native // The styling defined in client.component.css will create a shadow DOM element on parent component hence the css will be applied to both on parent and child.
  //encapsulation: ViewEncapsulation.Emulated // The styling defined in client.component.css will be added to current component only and not to the child component, This will create a style class that would be applied only to parent component. This is default.
})
export class ClientsComponent implements OnInit {

  constructor() { }

  parent : string = "This is passed from master";
  child :string = "Will be initialsed from parent";
  ngOnInit() {
  }

  initializeChild(newVal: string){
      this.child = newVal;
  }
}
