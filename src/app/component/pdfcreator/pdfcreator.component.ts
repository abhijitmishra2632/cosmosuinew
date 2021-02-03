import { Component, OnInit } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';  
import * as pdfFonts from "pdfmake/build/vfs_fonts"; 
import { Invoice } from 'src/app/model/Invoice';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-pdfcreator',
  templateUrl: './pdfcreator.component.html',
  styleUrls: ['./pdfcreator.component.css']
})
export class PdfcreatorComponent implements OnInit {

  constructor(private userService: UsersService) {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;  
    this.generatePDF();
   }

  ngOnInit(): void {
      this.invoice=this.userService.getCustomer();
  }
  invoice = new Invoice();     

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
          text: 'L-2-56,Tamrit Colony,Angul',
          bold:true
        },
		    {
          text: 'Contact: 9003049525',
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
                text: this.invoice.customerName,
                bold:true
              },
              { text: this.invoice.addr },
              { text: this.invoice.contactNumber }
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
        },
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [{ qr: `${this.invoice.customerName}`, fit: '50' }],
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
            'Warrenty of the product will be subject to the manufacturer terms and conditions.',
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
