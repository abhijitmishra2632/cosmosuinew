import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/Products';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public getAllStoreProducts() {
    return this.httpClient.get<Products>(this.uri);
  }
  uri:string=`${baseUrl}`+'/store';

  constructor(private httpClient: HttpClient) { }
}
