import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class AuthService {

 UserSubject = new Subject<any[]>();



  isAuth: boolean;
  isReset = false; // indique si le formulaire d'authentification a été rechargée suite à un mauvais MdP
  
  public userConnected: string;
  public indexUserConnected: number;

  public users: User[] =[ 
    {
      userName : 'Evita',
      password : 'PALLICER',
      nbRecette : 0
    }, 
    {
      userName : 'Bapt',
      password : 'www',
      nbRecette : 0
    },
    {
      userName : 'Mathilde',
      password : 'GRILLERE',
      nbRecette : 0
    },
    {
      userName : 'Françoise',
      password : 'CHIRON',
      nbRecette : 0
    }

  ]; 

  emitUserSubject(){
      this.UserSubject.next(this.users.slice());
    }


  signIn(userNameEntered: string, userPasswordEntered: string) {
  
  for (var i=0; i < this.users.length; i++){
  	if ((this.users[i].userName == userNameEntered) && (this.users[i].password == userPasswordEntered) ){
  		this.isAuth = true;
      this.userConnected = this.users[i].userName;
      this.indexUserConnected = i;
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
public getIdUserByName(userName: string){
  for (var i=0; i < this.users.length; i++){
    if ((this.users[i].userName == userName) ){
      return i;
      }
  }
   console.log("index: " + i);

}
       
  

  signOut() {
    this.isAuth = false;
    this.userConnected = '';
    console.log("Auth:" + this.isAuth);
  }
    
    
}