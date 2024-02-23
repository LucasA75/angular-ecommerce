import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/Product';
import { CartUser } from '../../services/cartUser.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartUserService: CartUser,
    private toast: ToastService
  ) {}
  @Input() product: Product | null = null;

  navegateToDetailProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }

  addProductCart() {
    this.cartUserService.addItemCart(this.product!);
    this.toast.addMessage('Product added to cart');
  }
}
