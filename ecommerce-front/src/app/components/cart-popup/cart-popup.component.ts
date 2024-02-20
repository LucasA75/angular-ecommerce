import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '../../services/pop-up.service';
import { Cart } from '../../interfaces/Cart';

@Component({
  selector: 'app-cart-popup',
  standalone: true,
  imports: [],
  templateUrl: './cart-popup.component.html',
  styleUrl: './cart-popup.component.css',
})
export class CartPopupComponent implements OnInit {
  
  isOpen = false;
  @Input() cart : Cart | undefined = undefined
  constructor(private popupService: PopupService) {}

  ngOnInit() {
    this.popupService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  closePopup() {
    this.popupService.closePopup();
  }
}
