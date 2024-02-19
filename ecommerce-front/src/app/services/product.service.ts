import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl = 'http://localhost:3000';
  private urlClass = '/products'

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.apiUrl + this.urlClass);
  }

  getProduct(id: string) : Observable<Product>{
    return this.http.get<Product>(this.apiUrl + this.urlClass + `/${id}`)
  }

  updateProduct(id: string, editProduct: Product){
    return this.http.patch(this.apiUrl + this.urlClass + `/${id}`,editProduct)
  }

  deleteProduct(id:string){
    return this.http.get(this.apiUrl + this.urlClass + `/${id}`)
  }

}
