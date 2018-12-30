import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  id:number;
  postCreateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService,
    private location : Location) { }

  ngOnInit() {
    this.postCreateForm = this.fb.group({
      'title': [null, Validators.required],
      'author': [this.getAuthor(), Validators.required],
      'image': [null, Validators.required],
      'publishdate': [Date.now(), Validators.required],
      'excert': [null, Validators.required],
    });
  }


  addPost(formData: NgForm){
    this.config.addPost(formData).subscribe(
      post => this.router.navigate([`article/${post['id']}`])
    );
  }

  getBack(){
    this.location.back();
  }

  getAuthor(){
    return this.auth.getUser()['id'];
  }

}
