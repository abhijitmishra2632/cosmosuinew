import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products:Array<Product> = [];

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      console.log(data);
      this.products=data.products;
    });
  }
  onAddToInventory(product){
    this.router.navigate(['/addToInventory',product.productId])
  }

}
