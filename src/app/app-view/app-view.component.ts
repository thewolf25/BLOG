import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss']
})
export class AppViewComponent implements OnInit , OnDestroy{
  
  posts : any[];
  postSubscribe : Subscription;
  constructor(
    private postService : PostService
  ) { 
     
  }
  ngOnInit() {
    this.postSubscribe = this.postService.postsSubject.subscribe(
      (post)=>{
        this.posts = post;
      }
    
    )
    this.postService.emitPosts();
  }
  
  title = 'BLOG';
  Date1= new Date();
  
  ngOnDestroy(){
    this.postSubscribe.unsubscribe();
  }

  



}
