import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from 'src/app/service/product.service';

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
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  onSubmitProduct(){
    console.log(this.product);
    this.productService.saveProduct(this.product)
    .subscribe(data => {
      console.log("Saved successfully");
      });
  }

}
