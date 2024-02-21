import { Component, OnInit } from '@angular/core';
import { IconContainerComponent } from '../../components/icon-container/icon-container.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CartPopupComponent } from '../../components/cart-popup/cart-popup.component';
import { PopupService } from '../../services/pop-up.service';
import { CartUser } from '../../services/cartUser.service';
import { Cart } from '../../interfaces/Cart';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IconContainerComponent, FontAwesomeModule, CardProductComponent, CartPopupComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  iconCofee = faCoffee;
  iconStar = faStar;
  iconGift = faGift;
  products: Product[] | null = null;
  selectProductId: string | null = null;
  cartUser: Cart | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private popupService: PopupService,
    private cartUserService: CartUser
  ) {}

  ngOnInit(): void {
    this.getListProduct();
    this.getCartUser();
  }

  getListProduct() {
    return this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  getProductId() {
    this.route.paramMap.pipe(
      switchMap((param) => {
        this.selectProductId = param.get('id');
        return this.productService.getAllProducts();
      })
    );
  }

  openPopup() {
    this.popupService.openPopup();
  }

  getCartUser():void{
    let cartUser = this.cartUserService.getCart()
    if(cartUser == null){
        cartUser = this.cartUserService.addCart()
    }
    console.log(cartUser);
  }

}
