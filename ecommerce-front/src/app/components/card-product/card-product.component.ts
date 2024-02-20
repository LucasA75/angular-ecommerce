import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  constructor(private route :ActivatedRoute){

  }
  @Input() titleProduct = "Example title"
  @Input() value = 123
  @Input() description = "Description product"

  navegateToProduct(){
    
  }

}
