import { Item } from './Item';
import { UserAddress } from './UserAddress';

export class Invoice {
    public address: UserAddress;
    public contactNumber: number;
    public items:Item[]=[];
    constructor() { 
        
     }
}