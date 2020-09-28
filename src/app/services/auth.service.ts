export class AuthService {

  isAuth: boolean;
  isReset = false; // indique si le formulaire d'authentification a été rechargée suite à un mauvais MdP
  userName = "Evita";
  userPassword ="1234";

  signIn(userNameEntered: string, userPasswordEntered: string) {
  
  	if ((this.userName == userNameEntered) && (this.userPassword == userPasswordEntered) ){
  		this.isAuth = true;
    	console.log("Auth:" + this.isAuth);
    	return true;
  	}
    else {
    	return false;
    }
       
  }

  signOut() {
    this.isAuth = false;
    console.log("Auth:" + this.isAuth);
  }
    
    
}