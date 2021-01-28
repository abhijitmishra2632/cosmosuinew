import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.dummyCall()
    .subscribe(data => {
      console.log(data);
      });
  }

}
