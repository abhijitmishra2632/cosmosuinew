import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  constructor(private userservice:UsersService) { }
  msg:string;
  ngOnInit(): void {
    this.userservice.savefromExcelSheet()
                    .subscribe(data => {
                                  console.log(data);
                                  this.msg=data;
                    });
  }

}
