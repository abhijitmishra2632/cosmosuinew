import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { Product } from '../../../model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products:Array<Product> = [];
  mobileNumber:number;
  constructor(private productService:ProductService, private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      console.log(data);
      this.products=data.products;
    });
  }
  onClone(product){
    this.router.navigate(['/vcloneproduct',product.productId])
  }
  onUpdate(product){
    this.router.navigate(['/vupdateproduct',product.productId])
  }
  onDelete(product){
    this.router.navigate(['/vdeleteproduct',product.productId])
  }
  onUploadPhoto(product){
    this.router.navigate(['/uploadphoto',product.productId])
  }

}
