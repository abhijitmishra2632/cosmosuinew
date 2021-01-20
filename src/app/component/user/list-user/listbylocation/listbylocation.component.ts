import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-listbylocation',
  templateUrl: './listbylocation.component.html',
  styleUrls: ['./listbylocation.component.css']
})
export class ListbylocationComponent implements OnInit {

  constructor(private userservice:UsersService) { }
    
  users:any;
  
  ngOnInit(): void {
    this.userservice.getAllUsers()
    .subscribe(data => {
      this.users=data;
    });
  }

}
