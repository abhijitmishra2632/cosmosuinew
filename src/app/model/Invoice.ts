import { Item } from './item';
import { Product } from './product';
import { Address } from './useraddress';

export class Invoice {
    public address: Address;
    public contactNumber: number;
    public items:Item[]=[];
    constructor() { 
        
     }
  }