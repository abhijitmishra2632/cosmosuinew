import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/Product';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-uploadpic',
  templateUrl: './uploadpic.component.html',
  styleUrls: ['./uploadpic.component.css']
})
export class UploadpicComponent implements OnInit {
  product=new Product();
  uploadForm:FormGroup;
  selectedFile=null;
  constructor(private route:ActivatedRoute,private productService:ProductService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.readProductId();  
    this.uploadForm = this.formBuilder.group({
      productId:[''],
      productPhoto:['']
    });
  }
  readProductId(){
    let id = parseInt(this.route.snapshot.params.id);
    this.productService.getProduct(id)
    .subscribe(data => { 
      if(data !=null){
        console.log(data);
        this.product=data;
      }else{
        console.log(data);
      }
    });
  }
  onPicSelected(event){
    this.selectedFile=event.target.files[0];
    console.log(event);
    this.uploadForm.get('productPhoto').setValue(this.selectedFile);
  }
  onUpload(){
    console.log("upload selected");
    const formData = new FormData();
    formData.append('productId',this.product.productId.toString());
    formData.append('productPhoto',this.uploadForm.get('productPhoto').value);
    this.productService.uploadPicture(formData)
    .subscribe(res => 
      {
        console.log(res);
      }
    );
  }

}
