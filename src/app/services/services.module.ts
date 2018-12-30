import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicePageComponent } from './service-page/service-page.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [ServicePageComponent]
})
export class ServicesModule { }
