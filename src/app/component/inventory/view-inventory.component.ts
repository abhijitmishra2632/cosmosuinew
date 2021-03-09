import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/model/inventory';
import { InventoryPojo } from 'src/app/model/InventoryPojo';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html'
})
export class ViewInventoryComponent implements OnInit {

  inventoryList:InventoryPojo[];

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.GetInventoryList()
    .subscribe(data => {
      this.inventoryList=data.inventoryList;
    });
  }

}
