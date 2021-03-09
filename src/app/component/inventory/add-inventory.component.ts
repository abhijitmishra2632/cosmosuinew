import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from 'src/app/model/inventory';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html'
})
export class AddInventoryComponent implements OnInit {
  inventory= new Inventory();

  constructor(private route:ActivatedRoute,private inventoryService:InventoryService,private routes:Router) { }

  ngOnInit(): void {
    this.readProductId();  
  }
  readProductId(){
    let id = parseInt(this.route.snapshot.params.id);
    this.inventory.productId=id;
  }
  onSubmitProductTInventory(){
    //save this Inventory to database
    this.inventoryService.saveProductToInventory(this.inventory)
    .subscribe(data => {
      console.log("Saved successfully");
    });
    this.routes.navigate(['/inventory']); 
  }

}
