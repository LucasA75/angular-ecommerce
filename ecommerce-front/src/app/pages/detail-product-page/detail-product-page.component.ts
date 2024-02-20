import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  product: Product | undefined;
  amountProduct: number = 1

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId!).subscribe({
      next : (product: Product) => {
        this.product = product;
        console.log(this.product);
      },
      error: (error) => console.error('Product not found:', error),
    }
    );
    console.log(this.product);
  }

  addAmountProduct(){
    if(this.product!.stock >  this.amountProduct){
      this.amountProduct++
    }
  }

  reduceAmountProduct(){
    if(this.amountProduct > 1){
      this.amountProduct--
    }
  }


  goToProduct(product: Product) {
    const productId = product ? product._id : null;
    this.router.navigate(['/product', { id: productId }]);
  }
}
