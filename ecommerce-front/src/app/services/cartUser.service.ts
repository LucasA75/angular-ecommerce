// popup.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../interfaces/Cart';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class CartUser {
  private cartSubject = new Subject<Cart>();
  cart$ = this.cartSubject.asObservable();

  addCart(): void {
    const newCart: Cart = {
        product: [],
        client: '',
        totalPrice: 0,
        amount: 0,
        status: 'new'
    };
    this.cartSubject.next(newCart)
  }

  getProductCart(): Product[] {
    const listProduct: Product[] = [];
    this.cart$.subscribe((x) => listProduct.push(...x.product));
    return listProduct;
  }

  addItemCart(item: Product): void {
    const currentCart = this.getProductCart();
    const updatedProducts = [...currentCart, item];
    const updatedCart: Cart = {
      ...currentCart,
      product: updatedProducts,
      client: '',
      totalPrice: updatedProducts.reduce((acc, curr) => acc + curr.price, 0),
      amount: 0,
      status: 'inProgress',
    };
    this.cartSubject.next(updatedCart);
  }

  removeItem(index: number): void {
    const currentCart = this.getProductCart();
    const updatedProducts = [
      ...currentCart.slice(0, index),
      ...currentCart.slice(index + 1),
    ];
    const updatedCart: Cart = {
      ...currentCart,
      product: updatedProducts,
      client: '',
      totalPrice: updatedProducts.reduce((acc, curr) => acc + curr.price, 0),
      amount: 0,
      status: '',
    };
    this.cartSubject.next(updatedCart);
  }

  clearCart(): void {
    const currentCart = this.getProductCart();
    const updatedCart: Cart = {
      ...currentCart,
      product: [],
      client: '',
      totalPrice: 0,
      amount: 0,
      status: 'clean',
    };
    this.cartSubject.next(updatedCart);
  }
}
