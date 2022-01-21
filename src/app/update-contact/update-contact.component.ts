import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contact: Contact = new Contact();
  contactId: number=0;

  constructor(private contactService: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.contactId=this.activatedRoute.snapshot.params['id'];

    this.contactService.getContactById(this.contactId).subscribe(data => {
      this.contact=data;
    },
    error => console.log(error) 
    );
  }
  updateContactDtls() {
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
    this.updateContactDtls();
  }

}
