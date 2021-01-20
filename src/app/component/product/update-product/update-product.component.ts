import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId:number;
  product = new Product();
  productStatus:boolean=true;
  categoryList=['Packet','Loose'];
  typeList=['Dali','Masala','Atta','Ditergent','Tooth Paste'];
  unitList=['Kg','gm',];
  storeList=['MyStore','Suman Traders','Bishnu Marwadi','Cosmetic Store','Others'];
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.readProductId();  
  }
  readProductId(){
    let id = parseInt(this.route.snapshot.params.id);
    this.productId=id;
    console.log("id is"+this.productId);
    this.productService.getProduct(this.productId)
    .subscribe(data => { 
      if(data !=null){
        this.product=data;
      }else{
        console.log(data);
      }
    });
  }
  onUpdateProduct(){
    console.log("submitted value "+this.product);
    this.productService.updateProduct(this.product)
    .subscribe(data => {
      console.log("Producted updated successfully");
      });
    this.productStatus=false;
  }

}
