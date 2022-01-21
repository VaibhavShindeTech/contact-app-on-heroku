import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts(){
    this.contactService.getContactList().subscribe(data => {
      this.contacts=data;
    })
  }

  updateContact(contactId:number) {
    this.router.navigate(["update-contact",contactId]);
  }
  deleteContact(contactId:number){
    this.contactService.deleteContact(contactId).subscribe(data=>{
      this.getContacts();
    });
  }

}
