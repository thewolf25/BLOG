import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Post} from '../models/Post.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit , OnDestroy {
  successMessage : string;
  errorMessage : string ;
  postForm : FormGroup;

  constructor( 
    private postService : PostService,
    private formBuilder : FormBuilder,

    ) {}

  ngOnInit() {
    this.initForm();
  }


  initForm(){
    this.postForm = this.formBuilder.group(
      {
        title : ['', [Validators.required]],
        content : ['',[Validators.required]]
      }
    )
  }

  onSubmitForm(){
    // const post = {
    //   title : this.postForm.get('title'),
    //   content : this.postForm.get('content')
    // }
    let post =new Post(this.postForm.get('title').value,this.postForm.get('content').value);
    this.postService.addPost(post).then(
      ()=>{
        this.successMessage = "L'ajout est terminé avec succés";
        this.initForm();
        
      },
      (error)=>{
        this.errorMessage= error;
       console.log(error);
      }
    )


  }
  ngOnDestroy(){

  }
}
