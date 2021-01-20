import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-listonlynotwhatsapp',
  templateUrl: './listonlynotwhatsapp.component.html',
  styles: [
  ]
})
export class ListonlynotwhatsappComponent implements OnInit {

  constructor(private userservice:UsersService) { }
    
  users:any;
  
  ngOnInit(): void {
    this.userservice.getAllUsersNoWhatsapp()
    .subscribe(data => {
      this.users=data;
    });
  }

}
