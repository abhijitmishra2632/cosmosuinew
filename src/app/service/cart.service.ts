import { Injectable } from '@angular/core';
import { UserCart } from '../model/UserCart';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/Item';
import { UserAddress } from '../model/UserAddress';
import { baseUrl } from 'src/environments/environment';
import { UserCartGist } from '../model/UserCartGist';
import { ItemGist } from '../model/ItemGist';
import { ResponseModel } from '../model/ResponseModel';
import { Order } from '../model/Order';
import { Orders } from '../model/Orders';

@Injectable({
  providedIn: 'root'
})
export class CartService { 
  addressUrl:string=`${baseUrl}/address/`;
  cartUrl:string=`${baseUrl}/cart/`;
  orderUrl:string=`${baseUrl}/order/`;
  constructor(private httpClient: HttpClient) { }

  cartList:Array<Item> =[];
  cartUpdated= new UserCart();


  //Get Address For Single User
  public getAddress(mobileNumber: number) {
    return this.httpClient.get<UserAddress>(this.addressUrl+mobileNumber);
  }
  //Save Address for Single User
  public registerAddress(user: UserAddress) {
    this.httpClient.post<UserAddress>(this.addressUrl,user)
    .subscribe(data => {
      console.log(data);
    });
  }
  //Get Cart Details for Single User
  getCartListByMobileNumber(mobileNumber){
    return this.httpClient.get<UserCartGist>(this.cartUrl+mobileNumber);
  }
  //Save Cart Details for Single User
  onSaveCart(userCart){
    this.httpClient.post<UserCart>(this.cartUrl,userCart)
    .subscribe(data => {
      console.log(data.items);
      });
  }
  
  public saveOrder(order: Order) {
    return this.httpClient.post<ResponseModel>(this.orderUrl,order);
  }
  public getOrdersByMobileNumber(mobileNumber: number) {
    return this.httpClient.get<Orders>(this.orderUrl+mobileNumber);
  }
  public getAllOrders() {
    return this.httpClient.get<Orders>(this.orderUrl);
  }

  //Static calls
  public getCartList(){
    return this.cartList;
  }
  
  public onUpdateUserCart(userCart: UserCart) {
    let updateUrl= this.cartUrl+'update/'+userCart.mobileNumber;
    localStorage.setItem("finalCart",userCart.toString());
    console.log(updateUrl);
    this.httpClient.put<UserCart>(updateUrl,userCart)
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
  public onUpdateCartAdd(itemId) {
    let quantity=localStorage.getItem(itemId.toString());
    let increaseQuantity=Number(quantity)+1;
    localStorage.setItem(itemId.toString(),increaseQuantity.toString());
  }
  public covertToItems(itemGistSet:ItemGist[]){
    let items: Array<Item> =[];
    for(let index = 0;index<itemGistSet.length; index++){  
      let item = new Item();
      item.itemId = itemGistSet[index].item.itemId;
      item.productId =itemGistSet[index].item.productId;
      item.quantityOfProduct =itemGistSet[index].item.quantityOfProduct;
      item.product =itemGistSet[index].product; 
      console.log('item present in db'+itemGistSet[index].product.productName);
      items.push(item);
    }
    return items;
  }
  public addToLocalStorage(items: Item[]) {
    console.log('items fetched '+items);
    for (let index = 0; index < items.length; index++) { 
      console.log('item fetched '+items[index]);
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
  onAddToCart(product){
    let cart=new Item();
    cart.productId=product.productId;
    cart.quantityOfProduct=1;
    this.cartList.push(cart);
  }

}
