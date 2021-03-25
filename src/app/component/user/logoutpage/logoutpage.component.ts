import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutpage',
  templateUrl: './logoutpage.component.html',
  styleUrls: ['./logoutpage.component.css']
})
export class LogoutpageComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    console.log('logged out successfully');
    this.routes.navigate(['/loginpage']);
  }

}
