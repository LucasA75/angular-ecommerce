import { Component } from '@angular/core';
import { IconContainerComponent } from '../../components/icon-container/icon-container.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { ProductService } from '../../services/product.service';
import { ProductID } from '../../interfaces/ProductResponse';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IconContainerComponent,FontAwesomeModule,CardProductComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  iconCofee = faCoffee
  iconStar = faStar
  iconGift = faGift
  products: ProductID[] | null
  
  constructor(product : ProductService) {    
    this.products = product.getProducts().slice(0,8)
  }
  
}
