import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-product-page',
  standalone: true,
  imports: [],
  templateUrl: './detail-product-page.component.html',
  styleUrl: './detail-product-page.component.css',
})
export class DetailProductPageComponent implements OnInit {
  product: Observable<Product> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProduct(productId!);
  }

  goToProduct(product: Product) {
    const productId = product ? product._id : null;
    this.router.navigate(['/product', { id: productId }]);
  }
}
