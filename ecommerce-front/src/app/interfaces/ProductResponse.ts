import { Product } from "./Product";

export interface ProductResponse {
    total_rows: number;
    offset:     number;
    rows:       ProductID[];
}

export interface ProductID {
    id:    string;
    key:   string;
    value: Product;
}