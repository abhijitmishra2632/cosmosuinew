import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/Product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categoryList=['Packet','Loose'];
  typeList=['Dali','Masala','Atta','Ditergent','Tooth Paste'];
  unitList=['Kg','gm',];
  storeList=['MyStore','Suman Traders','Bishnu Marwadi','Cosmetic Store','Others'];
  product= new Product();
  constructor(private productService: ProductService,private routes:Router) { }

  ngOnInit(): void {
  }
  onSubmitProduct(){
    console.log(this.product);
    this.productService.saveProduct(this.product)
    .subscribe(data => {
      console.log("Saved successfully");
      this.routes.navigate(['/productmenu']);
      });
  }

}
