import { Injectable } from '@angular/core';
import { Client } from '../interfaces/Client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  private apiUrl = 'http://localhost:3000';
  private urlClass = '/clients'

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.apiUrl + this.urlClass);
  }

  getClient(id: string): Observable<Client>{
    return this.http.get<Client>(this.apiUrl + this.urlClass + `/${id}`)
  }

  createClient(client: Client){
    return this.http.post(this.apiUrl + this.urlClass,client)
  }

  updateClient(id: string, editClient: Client){
    return this.http.patch(this.apiUrl + this.urlClass + `/${id}`,editClient)
  }

  deleteClient(id:string){
    return this.http.get(this.apiUrl + this.urlClass + `/${id}`)
  }
  
}
