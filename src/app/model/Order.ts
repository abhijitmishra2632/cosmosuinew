import { UserCart } from "./UserCart";

export class Order {
    public orderId:number;
    public mobileNumber:number;
    public orderTime:Date;
    public paymentOption:string;
    public userCart:UserCart;
    constructor(){}
}