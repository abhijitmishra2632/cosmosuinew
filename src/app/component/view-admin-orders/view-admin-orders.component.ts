import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/Item';
import { Order } from 'src/app/model/Order';
import { OrderPojo } from 'src/app/model/orderPojo';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-view-admin-orders',
  templateUrl: './view-admin-orders.component.html',
  styleUrls: ['./view-admin-orders.component.css']
})
export class ViewAdminOrdersComponent implements OnInit {

  orderList : Array<Order>=[];
  productList:Array<Product> = [];
  order:Order;
  orderPojoList:Array<OrderPojo>=[];
  items :Array<Item>=[];
  viewOrderPage:boolean=false;
  value=0;
  constructor(private cartService:CartService,private router:Router) { }

  mobileNumber :number = Number.parseInt(localStorage.getItem("username"));
  ngOnInit(): void {
    this.cartService.getAllOrders()
    .subscribe(data => {
         this.orderList=data.orders;
      });
  }
  onView(order){
    //view order method has to be implemented
    this.viewOrderPage=true;
    this.order=order;
    this.items = this.order.userCart.items;
    this.cartService.getAddress(this.mobileNumber)
    .subscribe(data => {
      sessionStorage.setItem('addr',JSON.stringify(data));
    });
    sessionStorage.setItem(order.orderId,JSON.stringify(order));
    this.getProductList();
  }
  onDownload(){
    //call invoice generator
    this.router.navigate(['/invoice',this.order.orderId]);
  }
  onCancle(){
    //implement cancle logic here
  }
  getProductList(){
    let val =0;
    for (let item of this.items) {
      let orderPojo =new OrderPojo();
      orderPojo.productName =item.product.productName;
      orderPojo.productMRP =item.product.productMRP;
      orderPojo.productSellingPrice =item.product.productSellingPrice;
      orderPojo.quantityOfProduct =item.quantityOfProduct;
      orderPojo.total=orderPojo.quantityOfProduct*orderPojo.productSellingPrice;
      val = val + orderPojo.total;
      this.orderPojoList.push(orderPojo);
    }
    this.value = val;
  }

}
