import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { RegisterUser } from 'src/app/model/RegisterUser';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  confpassword:string;
  user=new RegisterUser();
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }
  onRegisterUser(){
    this.usersService.saveRegisterUser(this.user)
    .subscribe(data => {
      console.log("Failure msg"+data);
      });
      console.log("Never mind")
  }

}
