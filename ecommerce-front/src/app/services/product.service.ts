import { Injectable } from '@angular/core';
import * as json from '../../test/productos.json'
import { ProductID } from '../interfaces/ProductResponse';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): ProductID[]{
    return json.rows as ProductID[]
  }
}
