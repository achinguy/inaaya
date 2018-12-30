import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  services: {id: string,
    tagline: string,
    title: string,
    description: string
  }[];
  constructor(private config : ConfigService) { }

  ngOnInit() {
    this.getPageData('pages', 'services');
  }

  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.services = data;
        console.log(this.services);
      }
    );
  }

}
