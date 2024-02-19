import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  constructor(private route : ActivatedRoute,  private router: Router  ){

  }
  @Input() product : Product | null = null

  navegateToDetailProduct(productId : string){
    this.router.navigate(["/product",productId])
  }

}
