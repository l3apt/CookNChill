import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CookNChill';

  constructor(){
  	 var firebaseConfig = {
	    apiKey: "AIzaSyBDbAWV7tCS0_4vVaVWUDfavlsat_FifHM",
	    authDomain: "cooknchill-eec23.firebaseapp.com",
	    databaseURL: "https://cooknchill-eec23.firebaseio.com",
	    projectId: "cooknchill-eec23",
	    storageBucket: "cooknchill-eec23.appspot.com",
	    messagingSenderId: "156862504122",
	    appId: "1:156862504122:web:bb596c63f9dd3c91c8f683"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);

  }

 
}
