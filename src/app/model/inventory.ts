import { Product } from "./Product";

export class Inventory {
    public productId: number;
    public product:Product;
    public quantityOfProduct: number;
    public bestBeforeDays: number;
    public comments: string;
    public addedDate:string;
    constructor() {}
}