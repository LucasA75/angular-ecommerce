// popup.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private isOpenSubject = new Subject<boolean>();
  isOpen$ = this.isOpenSubject.asObservable();

  openPopup() {
    this.isOpenSubject.next(true);
  }

  closePopup() {
    this.isOpenSubject.next(false);
  }
}
