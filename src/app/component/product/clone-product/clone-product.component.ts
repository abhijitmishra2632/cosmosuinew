import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-clone-product',
  templateUrl: './clone-product.component.html',
  styleUrls: ['./clone-product.component.css']
})
export class CloneProductComponent implements OnInit {
  productId:number;
  product = new Product();
  productStatus:boolean=true;
  categoryList=['Packet','Loose'];
  typeList=['Dali','Masala','Atta','Ditergent','Tooth Paste'];
  unitList=['Kg','gm',];
  storeList=['MyStore','Suman Traders','Bishnu Marwadi','Cosmetic Store','Others'];
  constructor(private route:ActivatedRoute,private productService:ProductService,private routes:Router) { }

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
        console.log(data);
        this.product=data;
      }else{
        console.log(data);
      }
    });
  }
  onCloneProduct(){
    console.log(this.product);
    this.productService.cloneProduct(this.product)
    .subscribe(data => {
      console.log("Cloned successfully");
      
      });
    this.productStatus=false;
    this.routes.navigate(['/productmenu']);
  }

}
