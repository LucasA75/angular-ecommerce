import { Component, OnInit } from '@angular/core';
import { IconContainerComponent } from '../../components/icon-container/icon-container.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IconContainerComponent,FontAwesomeModule,CardProductComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  iconCofee = faCoffee
  iconStar = faStar
  iconGift = faGift
  products: Product[] | null = null

  constructor(private product : ProductService) {
  }

  ngOnInit(): void {
    this.getListProduct()
  }

  getListProduct(){
    return this.product.getAllProducts().subscribe(data =>{
      this.products = data
    })
  }
}
