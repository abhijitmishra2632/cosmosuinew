import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private userservice:UsersService) { }
    
  users:any;
  
  ngOnInit(): void {
    this.userservice.getAllUsers()
    .subscribe(data => {
      this.users=data;
    });
  }
  
}
