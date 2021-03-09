import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from 'src/app/model/inventory';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  inventory= new Inventory();

  constructor(private route:ActivatedRoute,private productService:ProductService,private routes:Router) { }

  ngOnInit(): void {
    this.readProductId();  
  }
  readProductId(){
    let id = parseInt(this.route.snapshot.params.id);
    this.inventory.productId=id;
  }
  onSubmitProductTInventory(){
    //save this Inventory to database

    this.routes.navigate(['/inventory']); 
  }

}
