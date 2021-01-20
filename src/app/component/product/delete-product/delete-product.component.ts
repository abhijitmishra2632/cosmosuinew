import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId:number;
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.deleteProduct();
  }
  deleteProduct(){
    let id = parseInt(this.route.snapshot.params.id);
    this.productId=id;
    console.log("inside delete"+id);
    this.productService.deleteProduct(this.productId)
    .subscribe(data => { 
      console.log(data);
    });
  }
}
