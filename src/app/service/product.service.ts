import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Item } from '../model/Item';
import { Products } from '../model/Products';
import { Photo } from '../model/Photo';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl:string=`${baseUrl}/product/`;

  constructor(private httpClient: HttpClient) { }

  
  //Get a Single Product
  public getProduct(productId){
    return this.httpClient.get<Product>(this.productUrl+productId);
  }
  //Get All Single Product
  public getAllProducts(){
    return this.httpClient.get<Products>(this.productUrl);
  }
  //Get All Deleted Product
  public getAllDeletedProducts() {
    return this.httpClient.get<Products>(this.productUrl+'deleted');
  }
  //Save a Single Product
  public saveProduct(product:Product){
    return this.httpClient.post<Product>(this.productUrl,product);
  }
  //Update a Single Product
  public updateProduct(product:Product){
    return this.httpClient.put<Product>(this.productUrl+`update/`+product.productId,product);
  }
  //Clone a Single Product
  public cloneProduct(product:Product){
    return this.httpClient.post<Product>(this.productUrl+`clone/`,product);
  }
  public updateStoreProduct(product:Product) {
    return this.httpClient.put(this.productUrl+`/store/update/`+product.productId,product);
  }
  //Delete a Single Product
  public deleteProduct(productId:number){
    return this.httpClient.delete(this.productUrl+productId);
  }
  //Undo a Single Deleted Product
  public undoProduct(id: number) {
    return this.httpClient.delete(this.productUrl+`undo/`+id);
  }
  public uploadPicture(formData: FormData) {
    console.log(formData);
    return this.httpClient.post<Photo>(this.productUrl+`upload`,formData);
  }
  public saveCartDetails(cartList: Item[]) {
    return  cartList;
  }
  
  
}
