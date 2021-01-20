import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-listonlywhatsapp',
  templateUrl: './listonlywhatsapp.component.html',
  styleUrls: ['./listonlywhatsapp.component.css']
})
export class ListonlywhatsappComponent implements OnInit {

  constructor(private userservice:UsersService) { }
    
  users:any;
  
  ngOnInit(): void {
    this.userservice.getAllUsersWhatsappOnly()
    .subscribe(data => {
      this.users=data;
    });
  }

}
