import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/Client';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css',
})
export class ClientPageComponent implements OnInit {
  user : Client | null = null;
  userID = "65d8e396bdc12318bb1a4e4b"
  constructor(private clientService: ClientService){

  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    return this.clientService.getClient(this.userID).subscribe((data) => {
      this.user = data;
    });
  }

}
