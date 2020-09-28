import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

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


  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
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




}
