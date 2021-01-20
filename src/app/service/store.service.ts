import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/Products';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public getAllStoreProducts() {
    return this.httpClient.get<Products>(this.uri);
  }
  uri:string='http://localhost:8099/store';

  constructor(private httpClient: HttpClient) { }
}
