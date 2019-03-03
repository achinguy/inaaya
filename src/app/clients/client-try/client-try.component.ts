import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-try',
  templateUrl: './client-try.component.html',
  styleUrls: ['./client-try.component.css']
})
export class ClientTryComponent implements OnInit {

  constructor() { }
  @Input() frmParent : string;
  @Output() frmChild:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.frmChild.emit("Value from Child");
    //this.parent = frmParent;
  }


}
