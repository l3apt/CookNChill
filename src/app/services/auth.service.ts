export class AuthService {

  isAuth = false;

  signIn() {
  
    this.isAuth = true;
       
  }

  signOut() {
    this.isAuth = false;
  }
}