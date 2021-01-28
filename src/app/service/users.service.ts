import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from '../model/RegisterUser';
import { Users } from '../model/User';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public dummyCall() {
    return this.httpClient.get(`${baseUrl}login/admin`, { headers: { authorization: this.createJWTHeader()  }, responseType: 'text' });

  }
  public saveToken(data: string) {
    var json = JSON.parse(data);
    localStorage.setItem('token',json.jwtToken);
  }
  public validateLogin(user: RegisterUser) {
    console.log("we are authenticating this user: "+this.createBasicAuthToken(user.username, user.password));
    return this.httpClient.get(`${baseUrl}login`, { headers: { authorization: this.createBasicAuthToken(user.username, user.password)  }, responseType: 'text' });
  }
  public getLoginAccessToken(user: RegisterUser) {
    console.log("we are authenticating this user: "+this.createBasicAuthToken(user.username, user.password));
    return this.httpClient.post(`${baseUrl}login`, user ,{ headers: { authorization: this.createBasicAuthToken(user.username, user.password)  }, responseType: 'text' });
  }

  public createJWTHeader(){
    let token =localStorage.getItem('token');
    return 'Bearer ' + token;
  }

  createBasicAuthToken(username: Number, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }
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
      let mobileNumber = user.username;
      localStorage.setItem('username',mobileNumber.toString());
      return true;    
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
    console.log("WTG");  
    return this.httpClient.post<any>(`http://localhost:9001/register`,user );
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
