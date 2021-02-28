import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { RegisterUser } from 'src/app/model/RegisterUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  user=new RegisterUser();
  constructor(private usersService:UsersService, private routes:Router) { }

  ngOnInit(): void {
  }
  onRegisterUser(){
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.usersService.saveRegisterUser(this.user)
    .subscribe(myObserver);
    if(myObserver.next){
      this.routes.navigate(['/loginpage']);
    }
    else if(myObserver.error){
      console.log('Registration Failed. Try again..');
    }
    else{
      console.log('Registration Failed. Try again.. one more time');
    }
      
  }

}
