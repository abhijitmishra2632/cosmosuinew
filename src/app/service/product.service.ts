import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Item } from '../model/item';
import { Products } from '../model/Products';
import { Photo } from '../model/Photo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  productUrl:string='http://localhost:8099/products';

  public getProduct(productId){
    return this.httpClient.get<Product>(this.productUrl+`/`+productId);
  }
  public getAllProducts(){
    return this.httpClient.get<Products>(this.productUrl);
  }
  public getAllDeletedProducts() {
    return this.httpClient.get<Products>(this.productUrl+'/deleted');
  }
  public saveProduct(product:Product){
    console.log("Inside add product repo: "+product);
    return this.httpClient.post<Product>(this.productUrl+'/',product);
  }
  public updateProduct(product:Product){
    console.log("Inside update product repo: "+product);
    return this.httpClient.put<Product>(this.productUrl+`/update/`+product.productId,product);
  }
  public cloneProduct(product:Product){
    console.log("Inside clone product repo: "+product);
    return this.httpClient.post<Product>(this.productUrl+`/clone`,product);
  }
  public deleteProduct(productId:number){
    console.log("Inside delete product repo"+productId);
    return this.httpClient.delete(this.productUrl+`/`+productId);
  }

  public undoProduct(id: number) {
    return this.httpClient.delete(this.productUrl+`/undo/`+id);
  }

  public uploadPicture(formData: FormData) {
    console.log(formData);
    return this.httpClient.post<Photo>(this.productUrl+`/upload`,formData);
  }
  public updateStoreProduct(product:Product) {
    return this.httpClient.put(this.productUrl+`/store/update/`+product.productId,product);
  }
  public saveCartDetails(cartList: Item[]) {
    return  cartList;
  }
  
  
}
