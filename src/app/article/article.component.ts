import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { Post } from '../Post';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  post: Post;
  constructor(private route: ActivatedRoute, private config: ConfigService, private location : Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.getConfigById(id)
  }
  getConfigById(id : number){
    return this.config.getPostByID(id).subscribe(
      post => this.post = post
    )
  }
  getBack(){
    this.location.back();
  }

}
