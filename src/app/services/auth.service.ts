import { User } from '../models/User.model';

export class AuthService {

  isAuth: boolean;
  isReset = false; // indique si le formulaire d'authentification a été rechargée suite à un mauvais MdP
  
  public userConnected: string;
  public nbRecetteConnected: number;

  public users: User[] =[ 
    {
      userName : 'Evita',
      password : '1234',
      nbRecette : 0
    }, 
    {
      userName : 'Bapt',
      password : 'www',
      nbRecette : 0
    }
  ]; 


  signIn(userNameEntered: string, userPasswordEntered: string) {
  
  for (var i=0; i < this.users.length; i++){
  	if ((this.users[i].userName == userNameEntered) && (this.users[i].password == userPasswordEntered) ){
  		this.isAuth = true;
    	console.log("Auth:" + this.isAuth);
      this.userConnected = this.users[i].userName;
      this.nbRecetteConnected = this.users[i].nbRecette;
    	return true;
    	}
    
    else if (i == this.users.length -1){
    	return false;
    }
 }
}
public getUserByName(userName: string){
  for (var i=0; i < this.users.length; i++){
    if ((this.users[i].userName == userName) ){
      return this.users[i];
      }
  }
}
       
  

  signOut() {
    this.isAuth = false;
    this.userConnected = '';
    this.nbRecetteConnected = 0;
    console.log("Auth:" + this.isAuth);
  }
    
    
}