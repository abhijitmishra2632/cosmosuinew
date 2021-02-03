import { Product } from './product';
import { Address } from './useraddress';

export class Invoice {
    public customerName:string;
    public addr: Address;
    public contactNumber: number;
    public products:Product[]=[];
    constructor() { 
        
     }
  }