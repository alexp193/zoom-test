import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';
import { Details } from 'src/app/interfaces/details.interface';
import { debounce } from 'rxjs-compat/operator/debounce';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public details: Array<Details>;
  public contacts: Array<Contact>;

  public contactDetails: Details;
  public data: Object = { contacts: Array, details: Array }


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.data = this.route.snapshot.data.resolve;
    this.details = this.data['details'];

  }


  showItemDetails(id) {
    const selectedContact: Details = this.details.find(item => item.id === id);
    this.contactDetails = selectedContact;
  }

}
