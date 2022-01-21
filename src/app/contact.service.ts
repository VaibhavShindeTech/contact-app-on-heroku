import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl: string = "https://jrtp-08-contact-app.herokuapp.com/contacts";

  constructor(private httpClient: HttpClient) { }

  getContactList(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseUrl}`);
  }

  createOrUpdateContact(contact: Contact): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, contact);
  }

  deleteContact(contactId: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${contactId}`);
  }
  getContactById(contactId: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.baseUrl}/${contactId}`);
  }
}
