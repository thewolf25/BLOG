import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyA3FAdB6KKpEPV9ROG8QGHeNfJbw3r1zao",
      authDomain: "posts-86c4b.firebaseapp.com",
      databaseURL: "https://posts-86c4b.firebaseio.com",
      projectId: "posts-86c4b",
      storageBucket: "",
      messagingSenderId: "649405558149",
      appId: "1:649405558149:web:a73199ff0672ee16"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
