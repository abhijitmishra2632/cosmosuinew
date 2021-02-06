import { Injectable } from '@angular/core';
import { UserCart } from '../model/usercart';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item';
import { Address } from '../model/useraddress';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public getAddress(mobileNumber: number) {
    return this.httpClient.get<Address>(this.addressUrl+"/"+mobileNumber);
  }
  addressUrl:string='http://localhost:9009/address/';
  public registerAddress(user: Address) {
    this.httpClient.post<Address>(this.addressUrl,user)
    .subscribe(data => {
      console.log(data);
    });
  }
  public onUpdateCartDelete(itemId: number) {
    let quantity=localStorage.getItem(itemId.toString());
    let increaseQuantity=Number(quantity)-1;
    if(increaseQuantity<0){
      increaseQuantity=0;
      localStorage.setItem(itemId.toString(),increaseQuantity.toString());
    }else{
      localStorage.setItem(itemId.toString(),increaseQuantity.toString());
    }
    
  }
  public onUpdateUserCart(userCart: UserCart) {
    let updateUrl= this.uri+'update/'+userCart.mobileNumber;
    console.log(updateUrl);
    this.httpClient.put<UserCart>(updateUrl,userCart)
    .subscribe(data => {
      console.log(data);
    });

  }
  public addToLocalStorage(items: Item[]) {
    for (let index = 0; index < items.length; index++) { 
      let itemId= items[index].itemId.toString();
      localStorage.setItem(itemId,items[index].quantityOfProduct.toString());
    }
  }
  public getItems(dbitems: Item[]){
    this.cartList=[];
    for (let index = 0; index < dbitems.length; index++) {
      let item=new Item();
      item.itemId=dbitems[index].itemId;
      let itemId= item.itemId.toString();
      item.quantityOfProduct=Number(localStorage.getItem(itemId));
      item.productId=dbitems[index].productId;
      item.product=dbitems[index].product;
      this.cartList.push(item);
    }
    sessionStorage.setItem('cartList',this.cartList.toString());
    return this.cartList;
  }
  public onUpdateCart(item: Item) {
    let cart=new Item();
    cart.productId=item.productId;
    console.log(item.quantityOfProduct);
    cart.quantityOfProduct=item.quantityOfProduct+1;
    console.log(cart.quantityOfProduct);
    this.cartList.push(cart);
    console.log(this.cartList);
    this.cartUpdated.mobileNumber=Number(localStorage.getItem('username'));
    return this.cartUpdated;
  }
  public onUpdateCartAdd(itemId) {
    let quantity=localStorage.getItem(itemId.toString());
    let increaseQuantity=Number(quantity)+1;
    localStorage.setItem(itemId.toString(),increaseQuantity.toString());
  }
  cartList:Array<Item> =[];
  cartUpdated= new UserCart();
  
  uri:string='http://localhost:8099/cart/';
  constructor(private httpClient: HttpClient) { }
  onSaveCart(userCart){
    console.log("Inside save service"+userCart);
    this.httpClient.post<UserCart>(this.uri,userCart)
    .subscribe(data => {
      console.log("Saved successfully");
      console.log(data.items);
      });;
  }
  getCartListByMobileNumber(mobileNumber){
    return this.httpClient.get<UserCart>(this.uri+mobileNumber);
    
  }
  onAddToCart(product){
    let cart=new Item();
    cart.productId=product.productId;
    cart.quantityOfProduct=1;
    this.cartList.push(cart);
    console.log("in onAddToCart"+this.cartList);
  }
  public getCartList(){
    return this.cartList;
  }

}
