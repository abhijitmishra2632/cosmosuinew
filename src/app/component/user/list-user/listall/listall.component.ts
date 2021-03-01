import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Users } from 'src/app/model/User';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {
  filterOption:string;
  filterList=['Only WhatsApp users','Non WhatsApp users'];

  constructor(private userservice:UsersService) { }
    
  users:Array<Users> = [];
  
  ngOnInit(): void {
    this.userservice.getAllUsers()
                      .subscribe(data => {
                          this.users=data.usersList;
                        });
  }
  onFilterUsers(){
    this.users=null;
    console.log('Calling filter option: '+this.filterOption);
    if(this.filterOption=='Non WhatsApp users'){
      this.userservice.getAllUsersNoWhatsapp()
                      .subscribe(data => {
                          this.users=data.usersList;
                      });
    }else if(this.filterOption=='Only WhatsApp users'){
      this.userservice.getAllUsersWhatsappOnly()
                      .subscribe(data => {
                          this.users=data.usersList;
                      });
    }else{
      this.userservice.getAllUsers()
                      .subscribe(data => {
                          this.users=data.usersList;
                        });
    }
  }

}
