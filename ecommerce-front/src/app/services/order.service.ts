import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000';
  private urlClass = '/order'

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.apiUrl + this.urlClass);
  }

  getOrder(id: string){
    return this.http.get(this.apiUrl + this.urlClass + `/${id}`)
  }

  createOrder(order: Order){
    return this.http.post(this.apiUrl + this.urlClass,order)
  }

  updateOrder(id: string, editOrder: Order){
    return this.http.patch(this.apiUrl + this.urlClass + `/${id}`,editOrder)
  }

  deleteOrder(id:string){
    return this.http.get(this.apiUrl + this.urlClass + `/${id}`)
  }
}
