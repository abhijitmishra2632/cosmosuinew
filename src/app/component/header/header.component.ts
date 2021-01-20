import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  loggedIn:boolean;
  isAdmin:boolean;
  ngOnInit(): void {
    this.loggedIn = this.usersService.checkLoggedin();
    this.isAdmin = this.usersService.checkAdmin();
   }
  onSubmit(){ 
  }

}
