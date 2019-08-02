import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Post } from '../models/Post.model';
export class PostService {

    postsSubject = new Subject<any[]>();
    posts= [
        {
        title: "POST 1 ",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora suscipit culpa harum, pariatur eveniet dolorem porro a provident, nulla at modi quos aliquam ex, aperiam itaque eaque quod consequuntur aliquid?" 
        } ,
        {
      title: "POST 2 ",
      content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora suscipit culpa harum, pariatur eveniet dolorem porro a provident, nulla at modi quos aliquam ex, aperiam itaque eaque quod consequuntur aliquid?" 
       
        },
        {
        title: "POST 3 ",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora suscipit culpa harum, pariatur eveniet dolorem porro a provident, nulla at modi quos aliquam ex, aperiam itaque eaque quod consequuntur aliquid?" 
         
        }
     
    ];

    emitPosts(){
      this.postsSubject.next(this.posts.slice());
    }

    likesAll=()=>{

    }
    addPost(post){
      this.posts.push(post);
      this.emitPosts();
      return this.savePost();
    }

    savePost(){
      return new Promise(
        (resolve , reject)=>{
          firebase.database().ref('/posts').set(this.posts  ).then(
            ()=>{
              resolve();
              
            },
            (error)=>{
              reject(error);
            }

          );
        }
      );

      
     

    }

    deletePost(post : Post){
        const bookIndexToRemove = this.posts.findIndex(
          (postEl) => {
            if(postEl === post) {
              return true;
            }
          }
        );
        this.posts.splice(bookIndexToRemove, 1);
        this.savePost();
        this.emitPosts();
    
}
}