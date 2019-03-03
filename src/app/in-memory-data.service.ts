import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    const users = [
      {id : 101, firstName: "achin", lastName: "goyal", email: "abc.yahoo.com", password: "welcome", bio: 'this is my bio', role: 'admin', image: 'user-1.jpg'},
      {id : 102, firstName: "sachin", lastName: "sharma", email: "xyz.yahoo.com", password: "welcome",  bio: 'i am a subscriber', role: 'subscriber', image: 'user-2.jpg'}
    ]

    const pages = [
          {id: 'intro',
            tagline: 'SUCESS',
            title: 'How We Help You To Sell Your Product',
            description: 'This is introduction!',
          },
          {id: 'clients',
            tagline: 'TRUST',
            title: 'Companies who use our services 111',
            description: 'Our clients',
          },
          {id: 'services',
            tagline: 'BELIEVING',
            title: 'Focusing On What Matters Most',
            description: 'Service Section'
          },
          {id: 'testimonials',
            tagline: 'FEEDBACK',
            title: 'What our customers are saying',
            description: 'This is what our customer\'s feel about us',
          },
          {id: 'pricing',
            tagline: 'YOUR CHOICE',
            title: 'We have the right package for you',
            description: '',
          },
          {id: 'gallery',
            tagline: 'We ❤ Doing amazing things',
            title: 'AdMISTER STUDIO',
            description: 'We are and amazing company',
          },
          {id: 'footer',
            copyrighttext: 'Made with ❤ by',
            developer: 'AdMISTER STUDIO',
            developerlink: 'http://admister.in',
          },
          {id: 'header',
            heading: 'AdMister Studios',
            headingtext: 'This website was created using Angular 6',
            buttontext: 'do some actionsss!',
            buttonlink: '/Home',
            image: 'banner-image-1.jpg'
          },
        ];


        const features = [
          {id: 1, icon: 'html5', title: 'HTML5 & CSS3',
          description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico'},
          {id: 2, icon: 'bolt', title: 'Easy to Use',
          description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi'},
          {id: 3, icon: 'tablet', title: 'Fully Responsive',
          description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
          {id: 4, icon: 'rocket', title: 'Parallax Effect',
          description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
      ];

      const images = [
        {id: 1, name: 'gallery-image-1.jpg'},
        {id: 2, name: 'gallery-image-2.jpg'},
        {id: 3, name: 'gallery-image-3.jpg'},
        {id: 4, name: 'gallery-image-4.jpg'},
        {id: 5, name: 'gallery-image-5.jpg'},
        {id: 6, name: 'gallery-image-6.jpg'},
    ];

    const posts = [
      {id: 1, title: 'The First Article', author: "AD", image: 'gallery-image-1.jpg', publishdate : '2018-06-19', excert : 'This is summary for first article...'},
      {id: 2, title: 'The second Article', author: "AD", image: 'gallery-image-2.jpg', publishdate : '2018-06-19', excert : 'This is summary for second article...'},
      {id: 3, title: 'The third Article', author: "AD", image: 'gallery-image-3.jpg', publishdate : '2018-06-19', excert : 'This is summary for third article...'},
      {id: 4, title: 'The fourth Article', author: "AD", image: 'gallery-image-4.jpg', publishdate : '2018-06-19', excert : 'This is summary for fourth article...'},
      {id: 5, title: 'The fifth Article', author: "AD", image: 'gallery-image-5.jpg', publishdate : '2018-06-19', excert : 'This is summary for fifth article...'},
      {id: 6, title: 'The sixth Article', author: "AD", image: 'gallery-image-6.jpg', publishdate : '2018-06-19', excert : 'This is summary for sixth article...'},
      {id: 7, title: 'The seventh Article', author: "AD", image: 'gallery-image-1.jpg', publishdate : '2018-06-19', excert : 'This is summary for seventh article...'},
      {id: 8, title: 'The eighth Article', author: "AD", image: 'gallery-image-2.jpg', publishdate : '2018-06-19', excert : 'This is summary for eighth article...'},
      {id: 9, title: 'The nineth Article', author: "AD", image: 'gallery-image-3.jpg', publishdate : '2018-06-19', excert : 'This is summary for nineth article...'},
      {id: 10, title: 'The tenth Article', author: "AD", image: 'gallery-image-4.jpg', publishdate : '2018-06-19', excert : 'This is summary for tenth article...'},
      {id: 11, title: 'The eleventh Article', author: "AD", image: 'gallery-image-5.jpg', publishdate : '2018-06-19', excert : 'This is summary for eleventh article...'}
    ]

    const menu = [
      {id: 1, title: 'Home', routerLink: "/Home", outlet: ''},
      {id: 2, title: 'About', routerLink: "/About", outlet: ''},
      {id: 3, title: 'Gallery', routerLink: "/Gallery", outlet: ''},
      {id: 4, title: 'Services', routerLink: "/Services", outlet: ''},
      {id: 5, title: 'Testimonials', routerLink: "/Testimonials", outlet: ''},
      {id: 6, title: 'Clients', routerLink: "/Clients", outlet: ''},
      {id: 7, title: 'Pricing', routerLink: "/Pricing", outlet: ''},
      {id: 8, title: 'Blog', routerLink: "/Blog", outlet: ''},
      {id: 9, title: 'Contact Us', link: 'Contactus', outlet: 'popup'},
      {id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup'},
    ]

    return {users, posts, menu, pages, features, images};
  }

  getToken(users){
    return 'This is a token';
  }

  get(reqInfo: RequestInfo){
    if (reqInfo.collectionName === 'posts') {
      return this.getArticles(reqInfo);
    }
    return undefined;
  }

  getArticles(reqInfo: RequestInfo){
    return reqInfo.utils.createResponse$( () => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const id = reqInfo.id;
        const collection = reqInfo.collection;

        const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);

        const options : ResponseOptions = data ?
        {
          body : dataEncapsulation ? {data} : data,
          status : 200
        } : {
          body : {error : `Post not found`},
          status : 404
        }
        options.statusText = options.status === 200 ? 'OK' : 'NOT FOUND';
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;
    });
  }


  post(reqInfo: RequestInfo){
    console.log(reqInfo);
    if(reqInfo.id === 'login'){
      console.log("From Login");
      return reqInfo.utils.createResponse$( () => {
          const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
          const users = reqInfo.collection.find(usr => {
              return reqInfo.req['body'].email === usr.email && reqInfo.req['body'].password === usr.password;
          });

          let responseBody = {};
          if(users){
            responseBody = {
              id : users.id,
              firstName : users.firstName,
              lastName : users.lastName,
              email : users.email,
              token : this.getToken(users)
            }
          }
          const options : ResponseOptions = responseBody ?
          {
            body : dataEncapsulation ? {responseBody} : responseBody,
            status : 200
          } : {
            body : {error : `User with email =${reqInfo.req['body'].email} is not found`},
            status : 404
          }
          options.statusText = options.status === 200 ? 'OK' : 'NOT FOUND';
          options.headers = reqInfo.headers;
          options.url = reqInfo.url;
          return options;
      });

    } else if (reqInfo.id === 'signup') {
      //keeping this as null means that it has to generate a new id with the sequence
      reqInfo.id = null;
      console.log("From signup");
    }
  }
}
