import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-listbydate',
  templateUrl: './listbydate.component.html',
  styleUrls: ['./listbydate.component.css']
})
export class ListbydateComponent implements OnInit {

  constructor(private userservice:UsersService,private parserFormatter: NgbDateParserFormatter) { }
    dateSelected:boolean=false;
  model:any;
  users:any;
  
  ngOnInit(): void {
  }
  onSubmitDate(){
    let date=this.model;
    //console.log(this.model.day+" "+this.model.month+" "+this.model.year);
    //let date = this.parserFormatter.format(this.model.day+" "+this.model.month+" "+this.model.year);
    this.dateSelected=true;
    this.userservice.getAllUsersOnThisDate(date)
    .subscribe(data => {
      this.users=data;
    });

  }

}
