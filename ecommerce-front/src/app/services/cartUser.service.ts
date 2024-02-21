import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../interfaces/Cart';
import { Product } from '../interfaces/Product';
import { ShopProduct } from '../interfaces/ShopProduct';

@Injectable({
  providedIn: 'root',
})
export class CartUser {
  private cartSubject = new BehaviorSubject<Cart>({
    product: [],
    client: '',
    totalPrice: 0,
    amount: 0,
    status: 'new'
  });
  cart$: Observable<Cart> = this.cartSubject.asObservable();

  constructor() {}

  addCart(): void {
    const newCart: Cart = {
      product: [],
      client: '',
      totalPrice: 0,
      amount: 0,
      status: 'new'
    };
    this.cartSubject.next(newCart);
  }

  addItemCart(item: Product): void {
    const currentCart = this.cartSubject.value;
    const updatedProducts : ShopProduct[] = currentCart.product.map(prod => {
      return {
      ...prod,  
    }});
    const existingProductIndex = updatedProducts.findIndex(p => p._id === item._id);

    if (existingProductIndex !== -1) {
      updatedProducts[existingProductIndex].cantity++;
    } else {
      const newProduct: ShopProduct = {
        ...item,
        cantity: 1
      };
      updatedProducts.push(newProduct);
    }

    const totalPrice = updatedProducts.reduce((acc, curr) => acc + (curr.price * curr.cantity), 0);
    this.cartSubject.next({ ...currentCart, product: updatedProducts, totalPrice, status: 'inProgress' });
  }

  removeItem(index: number): void {
    const currentCart = this.cartSubject.value;
    const updatedProducts = [
      ...currentCart.product.slice(0, index),
      ...currentCart.product.slice(index + 1),
    ];
    const updatedCart: Cart = {
      ...currentCart,
      product: updatedProducts,
      totalPrice: updatedProducts.reduce((acc, curr) => acc + curr.price, 0),
    };
    this.cartSubject.next(updatedCart);
  }

  clearCart(): void {
    const updatedCart: Cart = {
      product: [],
      client: '',
      totalPrice: 0,
      amount: 0,
      status: 'clean',
    };
    this.cartSubject.next(updatedCart);
  }
}
