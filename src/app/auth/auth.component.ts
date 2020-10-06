import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RecetteService } from '../services/recette.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  AuthIsOk: boolean;
  userName: string;
  userPassword: string;
  users: any[];

  UserSubscription: Subscription;


  constructor(public authService: AuthService,
              public recetteService: RecetteService,  
              private router: Router) {
    
   }


  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    
    this.recetteService.initNbRecette();
    console.log('OnInit Eva:' + this.authService.users[0].nbRecette);
    console.log('OnInit Bapt:' + this.authService.users[1].nbRecette);

    this.UserSubscription = this.authService.UserSubject.subscribe(
      (users: any[]) => {
        this.users = users;
      }
    );
    this.authService.emitUserSubject();


  }


  onSignIn(form: NgForm) {
  
        this.userName = form.value['userName'];
        this.userPassword = form.value['userPassword'];

        this.AuthIsOk = this.authService.signIn(this.userName,this.userPassword);

         if (this.AuthIsOk) {
           
            console.log('Sign in successful!');
            this.authService.isReset = false;
             // redirection
            this.router.navigate(['recette-view']);
         }
         else {
           // redirection
            this.authService.isReset = true;
            form.resetForm();
         }

  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['recette-view']);
  }

  ngOnDestroy(){
    this.UserSubscription.unsubscribe();
  }




}
