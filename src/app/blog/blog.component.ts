import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { PagerService } from '../pager.service';
import { Post } from '../Post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any = {};
  allItems: any[];
  pages: any[];
  posts: Post[];

  pageSize = 5;
  pager: any = {};

  constructor(private config : ConfigService, private pagerService: PagerService) { }

  ngOnInit() {
    this.blog = this.getBlog();
    this.getPosts();

  }

  getBlog() {
    return this.config.getConfig().blog;
  }

  getPosts(){
    this.config.getPosts().subscribe(
      posts => {
        this.posts = posts
        this.allItems = posts;
        this.setPage(1);
      }
    );
  }

  setPage(pageNumber: number){
    //create a pager using paging services
    this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);

    //current page post
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.pager);
  }
}
