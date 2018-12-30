import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';
import { ConfigService } from '../config.service';
import { RouterLinkActive } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterContentChecked {

  menu : any;
  isLoggedIn: boolean;
  database = 'menu';
  menuOpen: boolean;
  profileImage: string;
  user: any;

  constructor(private location: Location, private auth: AuthenticationService, private config: ConfigService) { }

  ngOnInit() {
    this.getMenu();
    this.menuOpen = false;
    this.isLoggedIn = this.auth.isLoggedIn();
    this.getUser();
  }

  getMenu(){
    this.config.getSettings(this.database).subscribe(
      settings => {
        this.menu = settings;
        console.log(settings);
      }
    );
  }

  ngAfterContentChecked() {
    of(this.auth.isLoggedIn()).subscribe(
      () => {
        this.getUser();
      }
    );
  }

  toggleMenu(status: boolean) {
   this.menuOpen = status;
 }

  logout() {
    this.auth.logout();
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      this.profileImage = this.user.image;
    } else {
      this.profileImage = 'user-1.jpg';
    }
  }

}
