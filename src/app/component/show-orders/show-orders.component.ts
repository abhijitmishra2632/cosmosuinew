import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { Orders } from 'src/app/model/Orders';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowOrdersComponent implements OnInit {
  orderList : Array<Order>=[];
  constructor(private cartService:CartService) { }

  mobileNumber :number = Number.parseInt(localStorage.getItem("username"));
  ngOnInit(): void {
    this.cartService.getOrdersByMobileNumber(this.mobileNumber)
    .subscribe(data => {
         this.orderList=data.orders;
      });
  }

}
