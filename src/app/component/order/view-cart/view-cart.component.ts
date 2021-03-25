import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { UserCart } from '../../../model/UserCart';
import { Item } from 'src/app/model/Item';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { UserAddress } from 'src/app/model/UserAddress';
import { Payment } from 'src/app/model/Payment';
import { UserCartGist } from 'src/app/model/UserCartGist';
import { Order } from 'src/app/model/Order';

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
  userCart= new UserCart();
  userCartGist = new UserCartGist();
  addressPage:boolean=false;
  buyNow:Boolean=false;
  billPage:boolean=false;
  total:number=0;
  selected:boolean=false;
  user= new UserAddress();
  order = new Order();
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
      this.userCartGist=data;
      if(data.itemGistSet!=null){
        console.log('Data present');
        this.items = this.cartService.covertToItems(data.itemGistSet);
        this.cartService.addToLocalStorage(this.items);
        this.items=this.cartService.getItems(this.items);
        this.calculateGrandTotal();
      }else{
        console.log('no data available to populate'+data.itemGistSet+' and length is: ');
      }
      
      });
      
   }

  onIncrease(item:Item){
    this.cartService.onUpdateCartAdd(item.itemId);
    this.items=this.cartService.getItems(this.items);
    this.calculateGrandTotal();
  }
  onDecrease(item:Item){
    this.cartService.onUpdateCartDelete(item.itemId);
    this.items=this.cartService.getItems(this.items);
    this.calculateGrandTotal();
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
    this.saveCart();
  }
  onConfirmAddress(){
    this.addressPage = true;
    this.cartService.getAddress(this.mobileNumber)
    .subscribe(data => {
      console.log(data);
      sessionStorage.setItem('addr',data.toString());
      this.user=data;
    });
    this.calculateGrandTotal();
  }
  onBillNow(){
    this.addressPage = false;
    this.billPage=true; 
    this.saveCart();
  }
  onConfirmPayment(){

  }

  refreshCart(){
    this.saveCart();
    let mobileNumber=localStorage.getItem('username');
    this.cartService.getCartListByMobileNumber(mobileNumber)
    .subscribe(data => {
      this.userCartGist=data;
      if(data.itemGistSet!=null){
        console.log('Data present');
        this.items = this.cartService.covertToItems(data.itemGistSet);
        this.cartService.addToLocalStorage(this.items);
        this.items=this.cartService.getItems(this.items);
        this.calculateGrandTotal();
      }else{
        console.log('no data available to populate'+data.itemGistSet+' and length is: ');
      }
      });
  }
  onPlacingOrder(){  
    this.refreshCart();
    this.order.mobileNumber=this.mobileNumber;
    this.order.paymentOption = "cod";
    this.order.userCart=this.userCart;
    this.cartService.saveOrder(this.order)
    .subscribe(data => {
      console.log(data);
    });
  }
  goToCartPage(){
    this.addressPage = false;
    this.billPage = false;
    this.router.navigate(['/home']);
  }

}
