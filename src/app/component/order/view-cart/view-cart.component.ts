import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { UserCart } from '../../../model/usercart';
import { Item } from 'src/app/model/item';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Address } from 'src/app/model/address';
import { Payment } from 'src/app/model/payment';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  items : Array<Item>;
  product= new Product();
  paymentOption = new Payment(false,false,false,false);
  value:number = 0;
  dbitems : Array<Item>;
  userCart= new UserCart();
  addressPage:boolean=false;
  buyNow:Boolean=false;
  billPage:boolean=false;
  total:number=0;
  selected:boolean=false;
  user= new Address();
  calculateGrandTotal(){
    this.value=0;
    var items = this.items;
    for (var val of items) {
      this.value=this.value+val.quantityOfProduct*val.product.productSellingPrice;
    }
  }
  mobileNumber :number = Number.parseInt(localStorage.getItem("username"));
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    let mobileNumber=localStorage.getItem('username');
    this.cartService.getCartListByMobileNumber(mobileNumber)
    .subscribe(data => {
      this.dbitems=data.items;
      this.cartService.addToLocalStorage(data.items);
      this.items=this.cartService.getItems(this.dbitems);
      });
   }

  onIncrease(item:Item){
    this.cartService.onUpdateCartAdd(item.itemId);
    this.items=this.cartService.getItems(this.dbitems);
  }
  onDecrease(item:Item){
    this.cartService.onUpdateCartDelete(item.itemId);
    this.items=this.cartService.getItems(this.dbitems);
  }
  onbuyNow(){
    this.buyNow = true;
  }
  saveCart(){
    this.userCart.mobileNumber=Number(localStorage.getItem('username'));
    this.userCart.items=this.items;
    this.cartService.onUpdateUserCart(this.userCart);    
  }
  onRegisterAddress(){
    this.user.mobileNumber=this.mobileNumber;
    this.cartService.registerAddress(this.user);
  }
  onConfirmAddress(){
    this.addressPage = true;
    this.cartService.getAddress(this.mobileNumber)
    .subscribe(data => {
      console.log(data);
      this.user=data;
    });
  }
  onBillNow(){
    this.addressPage = false;
    this.billPage=true;
  }
  onConfirmPayment(){

  }

}
