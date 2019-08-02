import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppViewComponent } from './app-view/app-view.component';
import { Routes, RouterModule } from '@angular/router';


import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';

const appRoutes: Routes = [
  { path: 'posts', component: AppViewComponent },
  { path : 'add', component: PostsComponent},
  { path: '', component: AppViewComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    AppViewComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    PostService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
