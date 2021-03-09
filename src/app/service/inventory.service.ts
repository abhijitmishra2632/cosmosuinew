import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Inventory } from '../model/inventory';
import { InventoryList } from '../model/InventoryList';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  
  inventoryUrl:string=`${baseUrl}/inventory/`;

  constructor(private httpClient: HttpClient) { }
  //Save a Single Product In inventory
  public saveProductToInventory(inventory:Inventory){
    return this.httpClient.post<Inventory>(this.inventoryUrl,inventory);
  }
  public GetInventoryList() {
    return this.httpClient.get<InventoryList>(this.inventoryUrl);
  }
}
