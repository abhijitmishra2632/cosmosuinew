import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { UsersList } from 'src/app/model/UserList';
import { Users } from 'src/app/model/User';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {

  constructor(private userservice:UsersService) { }
    
  users:Array<Users> = [];
  
  ngOnInit(): void {
    this.userservice.getAllUsers()
    .subscribe(data => {
      this.users=data.usersList;
    });
  }

}
