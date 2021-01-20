import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usersService:UsersService) { }
  loggedIn:boolean;
  username:any;
  ngOnInit(): void {
    this.loggedIn = this.usersService.checkLoggedin();
    this.username= localStorage.getItem('username');
  }

}
