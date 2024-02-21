import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/Product';
import { CartUser } from '../../services/cartUser.service';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  constructor(private route : ActivatedRoute,  private router: Router  , private cartUserService: CartUser){

  }
  @Input() product : Product | null = null

  navegateToDetailProduct(productId : string){
    this.router.navigate(["/product",productId])
  }

  addProductCart(){
    this.cartUserService.addItemCart(this.product!)
  }

}
