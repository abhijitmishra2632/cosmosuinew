import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-role',
  templateUrl: './admin-role.component.html',
  styleUrls: ['./admin-role.component.css']
})
export class AdminRoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backupData(){
    console.log('called')
  }
  readProductFromCSV(){
    console.log('called again')
  }
  readUsersFromCSV(){
    console.log('called again')
  }

}
