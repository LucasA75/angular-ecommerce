export interface Product {
    _id:         string;
    name:        string;
    sku:         string;
    price:       number;
    rating:      number;
    description: string;
    brand:       string;
    stock:       number;
    images:      string[];
    __v:         number;
}
