import { Component, OnInit } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';  
import * as pdfFonts from "pdfmake/build/vfs_fonts"; 
import { Invoice } from 'src/app/model/Invoice';
import { Item } from 'src/app/model/Item';
import { CartService } from 'src/app/service/cart.service';
import { UsersService } from 'src/app/service/users.service';
import { UserCartGist } from 'src/app/model/UserCartGist';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/Order';
import { UserAddress } from 'src/app/model/UserAddress';

@Component({
  selector: 'app-pdfcreator',
  templateUrl: './pdfcreator.component.html',
  styleUrls: ['./pdfcreator.component.css']
})
export class PdfcreatorComponent implements OnInit {

  constructor(private userService: UsersService,private cartService:CartService,private router:Router,private route:ActivatedRoute) {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs; 
   }
   
  ngOnInit(): void {
    this.readOrder(); 
    this.onGenerateBill(); 
  }
  orderId:number;
  order:Order;
  address:UserAddress;
  userCartGist = new UserCartGist();
  items : Array<Item>;
  str:string;
  invoice = new Invoice(); 
  readOrder(){
    let id = parseInt(this.route.snapshot.params.id);
    this.orderId=id;
    this.str=sessionStorage.getItem(this.orderId.toString());
    this.order =JSON.parse(this.str);
    this.address=JSON.parse(sessionStorage.getItem('addr'));
    this.invoice.address=this.address;
    this.invoice.contactNumber= parseInt(localStorage.getItem('username'));
    this.invoice.items = this.order.userCart.items;
  }    
  onGenerateBill(){
    this.generatePDF();
    console.log("Called successfully");
    this.router.navigate(['/myorders']);
  }
  generatePDF(action = 'download') { 
    var today  = new Date();
    var todate=today.toLocaleDateString("en-US");
    let docDefinition = {
      content: [
        {
          text: 'Draupadi Delivery Services',
          fontSize: 16,
          color: '#047886'
        },
        {
          text: 'Tamrit Colony,Angul',
          bold:true
        },
		    {
          text: 'Contact: 8260827074',
          bold:true
        },
        {
          text: 'TAX INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: 'Name :'+this.invoice.address.name,
                bold:true
              },
              { text: 'Address :'+ this.invoice.address.address+" ,"+this.invoice.address.landmark },
              { text: 'Mobile Number :'+this.invoice.contactNumber }
            ],
            [
              { 
                text: `Invoice No: ${((Math.random() *100000).toFixed(0))}`,
                alignment: 'right'
              },
              {
                text: `Date: `+this.order.orderTime,
                alignment: 'right'
              }
            ]
          ]
        } 
        ,
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },  
        {  
            table: {  
                headerRows: 1,  
                widths: ['*', 'auto', 'auto', 'auto'],  
                body: [  
                    ['Product Name', 'Price', 'Quantity', 'Amount'],  
                    ...this.invoice.items.map(p => ([p.product.productName, p.product.productSellingPrice, p.quantityOfProduct, (p.product.productSellingPrice * p.quantityOfProduct).toFixed(2)])),  
                    [{ text: 'Total Amount', colSpan: 3 }, {}, {}, this.invoice.items.reduce((sum, p) => sum + (p.quantityOfProduct * p.product.productSellingPrice), 0).toFixed(2)]  
                ]  
            }  
        },
        {
          columns: [
            [{ qr: `${this.orderId}`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true}],
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [
            'This is system generated invoice.',
            'Warranty of the product will be subject to the manufacturer terms and conditions.',
          ],
      }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
    };      
    pdfMake.createPdf(docDefinition).open();

}
}
