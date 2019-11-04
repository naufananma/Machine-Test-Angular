import { Injectable } from '@angular/core';
import { Loginuser } from './loginuser';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  reserve() {
    throw new Error("Method not implemented.");
  }

  constructor(private httpService:HttpClient) {}
  
  public login(userInfo:Loginuser){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
    localStorage.setItem('UserID',userInfo.password);
    console.log(environment. baseUrl);
    return this.httpService.get<Loginuser>(environment.baseUrl+'/userdetails/'+userInfo.username)
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
