import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/model/inventory';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html'
})
export class ViewInventoryComponent implements OnInit {

  inventoryList:Inventory[];

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.GetInventoryList()
    .subscribe(data => {
      this.inventoryList=data.inventoryList;
    });
  }

}
