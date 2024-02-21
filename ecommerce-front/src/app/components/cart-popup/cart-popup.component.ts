import { CartUser } from './../../services/cartUser.service';
import { Component, OnInit } from '@angular/core';
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
  cart: Cart | undefined = undefined;

  constructor(private popupService: PopupService, private cartService: CartUser) {}

  ngOnInit() {
    this.popupService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });

    this.cartService.cart$.pipe().subscribe((cart) => {
      this.cart = cart;
    })

  }

  closePopup() {
    this.popupService.closePopup();
  }

}
