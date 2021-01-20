import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from '../model/RegisterUser';
import { Users } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public checkAdmin() {
    let username = localStorage.getItem('username');
    console.log(username);
    if(Number(username) == 9003049525 || username == 'admin' ) {
      return true;
    }
    else {
      return false;
    }
  }
  public loginUser(user: RegisterUser) {
    console.log(user);
    if(user.password=='admin'){
      let mobileNumber = user.mobileNumber;
      localStorage.setItem('username',mobileNumber.toString());
      return true;
    }else{
      return false;
    }
    //return this.httpClient.post(`http://localhost:8099/login/`,user);
  }
  public checkLoggedin(){
    let uname = localStorage.getItem('username');
    if(Boolean(uname)){
      return true;
    } else {
      return false;
    }
  }
    
  public saveRegisterUser(user:RegisterUser){
    console.log("WTG")    
    return this.httpClient.post<RegisterUser>(`http://localhost:8099/user/register/`,user);
  }

  constructor(private httpClient: HttpClient) { }

  public getUser(moblieNumber){
    return this.httpClient.get<Users>(`http://localhost:8090/user/`+moblieNumber);
  }
  public getAllUsers(){
    return this.httpClient.get(`http://localhost:8090/user`);
  }
  public savefromExcelSheet(){
    return this.httpClient.post<any>('http://localhost:8090/user/fromprop', { title: 'Angular POST Request Example' });
  }
  public saveUser(user:Users){
    //const body=JSON.stringify(user);
    console.log("Inside add userr repo: "+user);
    return this.httpClient.post<Users>(`http://localhost:8090/user/`,user);
  }
  public getAllUsersWhatsappOnly(){
    return this.httpClient.get(`http://localhost:8090/user/vwhatsapponly/`+true);
  }
  public getAllUsersNoWhatsapp(){
    return this.httpClient.get(`http://localhost:8090/user/vwhatsapponly/`+false);
  }
  public getAllUsersOnThisDate(selecteddate){
    console.log(selecteddate);
    return this.httpClient.get(`http://localhost:8090/user/vbyaddeddate/`+selecteddate);
  }
}
