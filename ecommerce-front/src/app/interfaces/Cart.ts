import { Product } from "./Product";

export interface Cart {
    client:     string;
    totalPrice: number;
    amount:     number;
    status:     string;
    product:    Product[];
}