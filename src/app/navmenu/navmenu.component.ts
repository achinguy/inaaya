import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor() { }

  @Input() menu: any;
  @Input() menuOpen: boolean;
  @Output() menuStatus: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit() {
  }

  toggleMenu() {
   this.menuStatus.emit(!this.menuOpen);
 }

}
