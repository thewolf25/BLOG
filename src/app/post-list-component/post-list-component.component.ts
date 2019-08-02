import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {PostService} from '../services/post.service';
import {Post} from '../models/Post.model'; 
Injectable;
@Component({
  selector: 'post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor( 
      private postService : PostService
  ) { 

  }
  @Input() title : string;
  @Input() content: string;
  @Input() createdAt : Date;
  @Input() loveIts =0;
  @Input() post:Post;

  
  ngOnInit() {
  }
  dateCreation = new Date();
  like=()=>{
    this.loveIts++;
  }
  dislike=()=>{
    this.loveIts--;
  }
  deletePostByID(post:Post){
    this.postService.deletePost(post)
  }

  






  

}
