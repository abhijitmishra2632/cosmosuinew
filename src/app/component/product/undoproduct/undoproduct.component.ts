import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-undoproduct',
  templateUrl: './undoproduct.component.html',
  styleUrls: ['./undoproduct.component.css']
})
export class UndoproductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.deleteProduct();
  }
  deleteProduct(){
    let id = parseInt(this.route.snapshot.params.id);
    this.productService.undoProduct(id)
    .subscribe(data => { 
      console.log(data);
    });
  }

}
