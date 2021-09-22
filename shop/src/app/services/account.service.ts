import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;

  login(user:User):boolean{
    if(user.userName=="özkan" && user.password=="12345"){
      this.loggedIn = true;
      localStorage.setItem("isLogged",user.userName);
      return true;
    }else{
      return false;
    }
  }

  isLoggedIn():boolean{
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
