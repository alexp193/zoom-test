import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/http.service';
import { Contact } from 'src/app/interfaces/contact.interface';
import { Details } from 'src/app/interfaces/details.interface';
import { debounce } from 'rxjs-compat/operator/debounce';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contacts: Array<Contact> = [];
  public details: Array<Details> = [];
  public contactDetails: Details;


  constructor(private contacts_srv: ContactsService) { }

  ngOnInit() {
    this.contacts_srv.getContacts().subscribe((response: Contact[]) => {
      this.contacts = response;
    });

    this.contacts_srv.getDetails().subscribe((response: Details[]) => {
      this.details = response;
    });
  }


  showItemDetails(id) {
    const selectedContact: Details = this.details.find(item => item.id === id);
    this.contactDetails = selectedContact;
  }

}
