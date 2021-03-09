import { Component, OnInit } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';  
import * as pdfFonts from "pdfmake/build/vfs_fonts"; 
import { Invoice } from 'src/app/model/Invoice';
import { Item } from 'src/app/model/Item';
import { CartService } from 'src/app/service/cart.service';
import { UsersService } from 'src/app/service/users.service';
import { UserCartGist } from 'src/app/model/UserCartGist';

@Component({
  selector: 'app-pdfcreator',
  templateUrl: './pdfcreator.component.html',
  styleUrls: ['./pdfcreator.component.css']
})
export class PdfcreatorComponent implements OnInit {

  constructor(private userService: UsersService,private cartService:CartService) {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;  
    this.getItems();
   }
   userCartGist = new UserCartGist();
   items : Array<Item>;
  ngOnInit(): void {
    this.userService.getInvoiceForCustomer()
    .subscribe(data => { 
      this.invoice.items=data.items;
      this.invoice.contactNumber=data.contactNumber;
      this.invoice.address=data.address;
      });;
    
  }
  invoice = new Invoice(); 
  str:String="Cash on Delivery Chosen.Thanks from Draupadi Delivery Services..";    
  dbitems:Item[]=[];
  getItems(){
    let mobileNumber=localStorage.getItem('username');
    this.cartService.getCartListByMobileNumber(mobileNumber)
    .subscribe(data => {
      this.userCartGist=data;
      if(data.itemGistSet!=null){
        console.log('Data present');
        this.items = this.cartService.covertToItems(data.itemGistSet);
        this.cartService.addToLocalStorage(this.items);
        this.items=this.cartService.getItems(this.items);
      }else{
        console.log('no data available to populate'+data.itemGistSet+' and length is: ');
      }
      
      });
  }
  onGenerateBill(){
    this.generatePDF();
    console.log("Called successfully");
  }
  generatePDF(action = 'open') { 
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
              { text: 'Number :'+this.invoice.contactNumber }
            ],
            [
              { 
                text: `Invoice No: ${((Math.random() *100000).toFixed(0))}`,
                alignment: 'right'
              },
              {
                text: `Date: ${todate}`,
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
            [{ qr: `${this.invoice.contactNumber}`, fit: '50' }],
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
