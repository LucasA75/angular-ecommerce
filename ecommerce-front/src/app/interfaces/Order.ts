export interface Order {
    client:         string;
    totalPrice:     number;
    shippingAdress: string;
    status:         string;
    date:           Date;
    products:       string;
}
