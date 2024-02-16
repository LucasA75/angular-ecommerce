import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/Cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private apiUrl = 'http://localhost:3000';
  private urlClass = '/cart'

  constructor(private http: HttpClient) {}

  getAllCarts(): Observable<Array<Cart>> {
    return this.http.get<Array<Cart>>(this.apiUrl + this.urlClass);
  }

  getCart(id: string){
    return this.http.get(this.apiUrl + this.urlClass + `/${id}`)
  }

  createCart(cart: Cart){
    return this.http.post(this.apiUrl + this.urlClass,cart)
  }

  updateCart(id: string, editCart: Cart){
    return this.http.patch(this.apiUrl + this.urlClass + `/${id}`,editCart)
  }

  deleteCart(id:string){
    return this.http.get(this.apiUrl + this.urlClass + `/${id}`)
  }
}
