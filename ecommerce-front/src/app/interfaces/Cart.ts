import { ShopProduct } from "./ShopProduct";

export interface Cart {
    client:     string;
    totalPrice: number;
    amount:     number;
    status:     string;
    product:    ShopProduct[];
}