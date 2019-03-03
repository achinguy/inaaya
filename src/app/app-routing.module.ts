import { NgModule, NgModuleFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoutegaurdService } from './routegaurd.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { UserDashBoardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from './home/home.module';

import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { GalleryModule } from './gallery/gallery.module';


const routes : Routes = [
  {path : '' , redirectTo : '/Home', pathMatch : 'full'},
  {path : 'About' , loadChildren: () => './about/about.module#AboutModule'},
  {path : 'Login' , component : LoginComponent},
  {path : 'Signup' , component : SignupComponent},
  {path : 'Contactus' , component : ContactusComponent, outlet: 'popup' },
  {path : 'Home' , loadChildren: './home/home.module#HomeModule'},
  {path : 'Services' , loadChildren: () => './services/services.module#ServicesModule'},
  {path : 'Testimonials' , component : TestimonialComponent},
  {path : 'Gallery' , loadChildren: () => './gallery/gallery.module#GalleryModule'},
  {path : 'Clients' , component : ClientsComponent},
  {path : 'Pricing' , component : PricingComponent},
  {path : 'subscribe', component: SubscribeComponent, outlet: 'popup' },
  {path : 'Dashboard' , loadChildren : () => './user-dashboard/user-dashboard.module#UserDashBoardModule', canActivate: [RoutegaurdService]},
  {path : 'Blog' , component : BlogComponent, canActivate: [RoutegaurdService]},
  {path : 'article/:id' , component : ArticleComponent},
  {path : 'article-edit/:id' , component : ArticleEditComponent, canActivate: [RoutegaurdService]},
  {path : 'article-create' , component : ArticleCreateComponent, canActivate: [RoutegaurdService]},
  {path : '404' , component : NotfoundComponent},
  {path : '**' , redirectTo: '/404'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
