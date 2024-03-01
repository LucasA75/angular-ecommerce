import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})
export class ClientPageComponent {

}
