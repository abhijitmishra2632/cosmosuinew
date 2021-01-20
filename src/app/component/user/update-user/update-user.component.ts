import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Users } from 'src/app/model/User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  searchEnable:boolean =true;
  mobileNumber:number;
  searchedMobileNumber:number;
  userStatus:boolean=true;
  user =new Users(9003049525,"source","name","location",true,true);
  constructor(private userService:UsersService) { }
  ngOnInit(): void {
  }
  
  onSubmit(data){ 
    this.searchedMobileNumber=data;
    this.userService.getUser(data)
    .subscribe(data => { 
      if(data !=null){
        this.user=data;
        this.searchEnable=false;
      }else{
        console.log(this.searchedMobileNumber);
        this.user.mobileNumber=this.searchedMobileNumber;
        this.searchEnable=false;
      }
      
    });
  }
  onSubmitUser(){
    console.log(this.user);
    this.userService.saveUser(this.user)
    .subscribe(data => {
      console.log("Saved successfully");
      this.userStatus=false;
      });
}
}
