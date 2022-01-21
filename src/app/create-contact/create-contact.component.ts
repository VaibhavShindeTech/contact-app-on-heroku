import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: Contact = new Contact();
  constructor(private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveContact() {
    this.contactService.createOrUpdateContact(this.contact).subscribe(data => {
      console.log(data)
      this.goToContactList();
    },
      error => console.log(error)
    );
  }
  goToContactList() {
    this.router.navigate(["/contacts"]);
  }
  onSumbit() {
    this.saveContact();
  }

}
