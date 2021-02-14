import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-deletedproduct',
  templateUrl: './deletedproduct.component.html',
  styleUrls: ['./deletedproduct.component.css']
})
export class DeletedproductComponent implements OnInit {

  products:Array<Product> = [];
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllDeletedProducts()
    .subscribe(data => {
      console.log(data);
      this.products=data.products;
    });
  }
  onUndo(product){
    this.router.navigate(['/vundoproduct',product.productId])
  }
  

}
