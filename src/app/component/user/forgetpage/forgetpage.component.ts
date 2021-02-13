import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/model/RegisterUser';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-forgetpage',
  templateUrl: './forgetpage.component.html',
  styleUrls: ['./forgetpage.component.css']
})
export class ForgetpageComponent implements OnInit {

  user=new RegisterUser();
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }
  onUpdateUser(){
    console.log("Updating Pssword..");
    let resp =this.usersService.updatePassword(this.user);
    resp.subscribe(data=>{
      console.log(data);
      console.log("Done");
}); 
  }

}
