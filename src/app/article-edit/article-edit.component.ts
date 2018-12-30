import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  id:number;
  postEditForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService,
    private location : Location) { }

  ngOnInit() {
    this.postEditForm = this.fb.group({
      'id': [null, Validators.required],
      'title': [null, Validators.required],
      'author': [null, Validators.required],
      'image': [null, Validators.required],
      'publishdate': [null, Validators.required],
      'excert': [null, Validators.required],
    });
    this.id = this.route.snapshot.params['id'] || null ;
    if(this.id) {
      this.postById(this.id);
    }
  }

  postById(id: number) {
    this.config.getPostByID(id).subscribe(
      post => {
        this.postEditForm.setValue({
          id: post.id,
          title: post.title,
          author: post.author,
          image: post.image,
          publishdate: post.publishdate,
          excert: post.excert
        })
      }
    );
  }

  updatePost(formData: NgForm){
    this.config.updatePost(formData).subscribe(
      () => this.getBack()
    );
  }

  getBack(){
    this.location.back();
  }
}
