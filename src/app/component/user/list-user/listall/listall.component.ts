import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {

  constructor(private userservice:UsersService) { }
    
  users:any;
  
  ngOnInit(): void {
    this.userservice.getAllUsers()
    .subscribe(data => {
      this.users=data;
    });
  }

}
